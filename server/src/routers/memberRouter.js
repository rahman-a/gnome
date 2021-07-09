import express from 'express'
const router  = express.Router()
 import {
    uploadCSV,
    generateCSVTemplate,
    extractTreeData,
    getMemberInfoById,
    memberAvatarUpload,
    getMemberAvatar,
    getAllMembers,
    editMemberById,
    createNewMember,
    SvgToPng,
    exportDataAsCSV
 } from '../controllers/memberController.js'
import {userAuth, isCoAdmin} from '../middleware/authenticate.js'
import {CSVUpload, avatarUpload} from '../middleware/upload.js' 

router.post('/upload-csv', userAuth, isCoAdmin, CSVUpload.single('csv'), uploadCSV )
router.get('/generate-csv/:count', userAuth, isCoAdmin,generateCSVTemplate )
router.get('/export-csv', userAuth, isCoAdmin,exportDataAsCSV )
router.get('/import-data', userAuth,extractTreeData)
router.get('/all', userAuth, isCoAdmin, getAllMembers)
router.get('/:id', userAuth,getMemberInfoById)
router.get('/avatar/:id', userAuth,getMemberAvatar)
router.post('/photo', userAuth, isCoAdmin,avatarUpload.single('avatar'),memberAvatarUpload)
router.post('/convertSvgTOPng', userAuth, isCoAdmin, SvgToPng)
router.patch('/edit', userAuth, isCoAdmin, editMemberById)
router.post('/new', userAuth, isCoAdmin, createNewMember)


export default router