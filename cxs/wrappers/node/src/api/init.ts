import * as index from '../index'
import * as posix from 'path'

export function init_cxs (filename) {
    var currentDir = posix.dirname(".")
    var path = currentDir + '/../node/lib/libcxs.so'
    var config = new index.CXSRuntimeConfig(path)
    var rust = new index.CXSRuntime(config)
    return rust.ffi.cxs_init(filename)
}
