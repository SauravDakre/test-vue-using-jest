import {shallow} from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import todo from './todo.vue';
// import sinon from 'sinon'
let todoComponent;
let todoUi;

describe('todo.spec.js - unit test', function(){
    beforeEach(function(){
        todoComponent = shallow(todo)
    })

    it('initially tasks should be empty', function(){
        expect(todoComponent.vm.tasks.length).toBe(0);
    })

    it('new task is properly populated', function(){
        todoComponent.vm.newTask = 'task1';
        todoComponent.vm.add();
        expect(todoComponent.vm.tasks.length).toBe(1);
        expect(todoComponent.vm.tasks[0]).toEqual('task1');
        expect(todoComponent.vm.newTask).toEqual('')
    })
})

describe('todo.spec.js - integration test', function(){
    beforeEach(function(){
        todoUi = mount(todo);
    })

    it('should not have any list item', function(){
        expect(todoUi.contains('li')).toBe(false)
    })

    it('should have heading', function(){
        const heading = todoUi.find('h2');
        expect(heading.text()).toEqual('Todo Component')
    })

    it('should add new task', function(){
        const input = todoUi.find('input');
        input.element.value = 'task1';
        input.trigger('input')
        todoUi.find('button').trigger('click');
        expect(todoUi.contains('li')).toBe(true)
        expect(todoComponent.vm.tasks[0]).toEqual('task1');
        // console.log(todoComponent.vm.tasks)
    })
})