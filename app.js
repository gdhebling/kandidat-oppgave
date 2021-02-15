var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fortressUrl = 'https://fortress.no/data/data-2020-interview.json';
var fetchData = function () {
    return __awaiter(this, void 0, void 0, function () {
        var resp, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(fortressUrl)];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, resp.json()];
                case 2:
                    data = _a.sent();
                    renderData(data);
                    return [2 /*return*/];
            }
        });
    });
};
var renderData = function (data) {
    /* Rendering the titles */
    var titleWrapper = document.querySelector('.title__wrapper');
    titleWrapper.innerHTML = "\n  <h2 class=\"title__item text-primary\">" + data.title[0] + "</h2>\n  <h2 class=\"title__item text-primary\">" + data.title[1] + "</h2>\n  ";
    /* Rendering the property details */
    var detailsCard = data.details.map(function (detail) {
        return "\n        <div class=\"container details__card\">\n            <p class=\"details__item details__name text-primary\">" + detail.name + "</p>\n            <p class=\"details__item details__value text-secondary\">" + detail.value + "</p>\n        </div>\n      ";
    });
    var detailsWrapper = document.querySelector('.details__wrapper');
    detailsWrapper.innerHTML = detailsCard.join('');
    /* Rendering the address and contact information */
    var addressWrapper = document.querySelector('.address__wrapper');
    addressWrapper.innerHTML = "\n    <div class=\"address__title text-primary\">Adresse</div>\n\n    <div class=\"address__street text-secondary\">\n        " + data.address.street + "\n    </div>\n    <div class=\"zipcode__wrapper\">\n        <div class=\"address__zipcode text-secondary\">" + data.address.zipCode + "</div>\n        <div class=\"address__city text-secondary\">" + data.address.city + "</div>\n    </div>\n  ";
    var contactWrapper = document.querySelector('.contact__wrapper');
    contactWrapper.innerHTML = "\n    <div class=\"contact__title text-primary\">Kontakt</div>\n    <div class=\"contact__name text-secondary\">\n        <p>" + data.contact.name + "</p>\n    </div>\n    <div class=\"contact__phone text-secondary\">\n        <p>" + data.contact.phone + "</p>\n    </div>\n\n  ";
    console.log(data);
};
fetchData();
