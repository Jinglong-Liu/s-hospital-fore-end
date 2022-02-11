import request from '@/utils/request'

export default {
  // 医院字典列表
  getHospList(page, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospital/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 根据dictCode查询所有子节点（所有省）
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },
  // findChildData/{id}
  findChildId(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  }
}
