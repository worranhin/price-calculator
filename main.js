/* 元素引用 */
const input_cost = document.querySelector('#cost');
const input_exchange = document.querySelector('#exchange');
const input_platform = document.querySelector('#platform');
const input_advert = document.querySelector('#advert');
const input_discount = document.querySelector('#discount');
const input_return = document.querySelector('#return-rate');
const input_profit = document.querySelector('#profit');
const input_price = document.querySelector('#price');
const btn_cal = document.querySelector('#btn-cal');

/* 获取数值 */



/**
 * 处理事件
 */
btn_cal.addEventListener('click', (e) => {
    try {
        let cost = parseFloat(input_cost.value);
        let exchange = parseFloat(input_exchange.value);
        let platform = parseFloat(input_platform.value);
        let advert = parseFloat(input_advert.value);
        let discount = parseFloat(input_discount.value);
        let returnRate = parseFloat(input_return.value);
        let profit = parseFloat(input_profit.value);
        let price = parseFloat(input_price.value);
        console.log('calculating');
        price = cost / exchange / (1 - platform) / (1 - advert) / discount / (1 - returnRate) / (1 - profit);
        input_price.value = price;
    } catch (error) {
        console.log(error)
    }
});