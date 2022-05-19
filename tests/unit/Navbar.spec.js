import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Navbar from '@/components/Navbar'

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('Vista Navbar', () => {
    it('Render Navbar', () => {
        const msg = 'Games Opinion'
        const navbarWrapper = shallowMount(Navbar, {
            localVue,
            router,
            stubs: ['FontAwesomeIcon']
        });
        expect(navbarWrapper.text()).toMatch(msg)
    });
});