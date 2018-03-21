import {shallow} from '@vue/test-utils'
import hello from './hello.vue'

describe('hello.spec.js', function(){
    it('test message', function(){
        let cmp = shallow(hello)
        expect(cmp.vm.message).toEqual('Hello World, Welcome to Your Vue.js App')
    })
})
