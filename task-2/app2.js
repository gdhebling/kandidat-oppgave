"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    initalizeApp();
});
[];
const initalizeApp = () => {
    // const fortressUrl2 = 'https://fortress.no/data/oppgave-2-2020.json';
    const fortressUrl2 = './data.json';
    const fetchData = function () {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield fetch(fortressUrl2);
            const data = yield resp.json();
            handleList(data);
        });
    };
    const handleList = (data) => {
        const filteredList = data.filter((data) => data.description === 'valid' || data.description === 'true');
        const sortedList = filteredList.sort((a, b) => b.value - a.value);
        console.log('sortedList', sortedList);
    };
    fetchData();
};
