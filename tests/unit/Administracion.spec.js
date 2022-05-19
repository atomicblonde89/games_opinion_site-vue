import { shallowMount, } from '@vue/test-utils';
import Administracion from '@/views/Administracion'

describe('Vista Administracion', () => {
    it('Render Administracion', () => {
        const msg = 'Administrando la Lista de Opiniones';
        const administracionWrapper = shallowMount(Administracion);
        expect(administracionWrapper.text()).toMatch(msg)
    });
});