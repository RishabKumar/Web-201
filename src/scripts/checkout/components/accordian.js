import {
    selector
} from '../../common/common';

const openNxtAccordian = (e) => {
    const currentAccordian = e.target.parentElement.parentElement;
    const nxtAccordian = currentAccordian.parentElement.nextElementSibling.querySelector('div');

    currentAccordian.style = 'display:none';
    nxtAccordian.style = 'display:grid';
}

const openAccordian = (e) => {
    selector.addressaccordianinput().forEach((input) => {
        e.target.parentElement.querySelector('div').style = 'display:grid;'
        if (input.value == '' || input.value == undefined) {
            e.target.parentElement.querySelector('div').style = 'display:none;';
        }
    });

}

export const accordian = {
    openAccordian: openAccordian,
    openNxtAccordian: openNxtAccordian
}
