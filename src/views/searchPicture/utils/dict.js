import docsImg from '@/assets/list/docs.png'
import musicImg from '@/assets/list/music.png'
import videoImg from '@/assets/list/video.png'
import pdfImg from '@/assets/list/pdf.png'
import blankImg from '@/assets/list/blank.svg'

export const fileTypeImgDict = {
  'doc': docsImg,
  'audio': musicImg,
  'video': videoImg,
  'pdf': pdfImg,
  'blank': blankImg,
}

// 全部用小写
export const fileTypePatterns = {
  image: /png|jpg|jpeg|svg|gif|tiff|tif/,
  video: /mov|mp4|swf|avi/,
  audio: /mp3|wav|ogg/,
  project: /zip|aep|fla|ai|psd|psb|eps|rar|sketch|fig|pdf|json|svg/,
  doc: /html/,
  pdf: /pdf/,
}

// 一级标签 icon
export const sideTagIcons = [
  'editFile',
  'cameraShot',
  'movie',
  '7days',
  'artBoard',
  'phone',
  'print',
  'box',
  'television1',
  'book1',
  'book'
]

export const deptList = [
  {
    "id": 1,
    "name": "文创组",
    "info": "文创组"
  },
  {
    "id": 2,
    "name": "运营设计组",
    "info": "运营设计组"
  },
  {
    "id": 3,
    "name": "UI组",
    "info": "UI组"
  },
  {
    "id": 4,
    "name": "设计标准组",
    "info": "设计标准组"
  },
  {
    "id": 5,
    "name": "品牌策划组",
    "info": "品牌策划组"
  },
  {
    "id": 6,
    "name": "插画组",
    "info": "插画组"
  },
  {
    "id": 7,
    "name": "后期组",
    "info": "后期组"
  },
  {
    "id": 8,
    "name": "动画组",
    "info": "动画组"
  }
]

export const auditStatusDict = {
  'all': null, // 全部
  'uncommited': 1, // 未提交审核
  'commited': 2, // 待审核
  'rejected': -1, // 被驳回
  'passed': 3, // 已入库
}

export const deptListDict = [
  {
    "id": 1,
    "name": "文创组",
    "info": "文创组"
  },
  {
    "id": 2,
    "name": "运营设计组",
    "info": "运营设计组"
  },
  {
    "id": 3,
    "name": "UI组",
    "info": "UI组"
  },
  {
    "id": 4,
    "name": "设计标准组",
    "info": "设计标准组"
  },
  {
    "id": 5,
    "name": "品牌策划组",
    "info": "品牌策划组"
  },
  {
    "id": 6,
    "name": "插画组",
    "info": "插画组"
  },
  {
    "id": 7,
    "name": "后期组",
    "info": "后期组"
  },
  {
    "id": 8,
    "name": "动画组",
    "info": "动画组"
  }
]
