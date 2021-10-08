

export function filterItems(string, arr) {
    return arr.filter(function(el) {
        return el.title.toLowerCase().indexOf(string.toLowerCase()) > -1;
    })
  }

export function filterPagination(arr, num=10) {
    let pages;
    if(arr.length > num) {
        pages = Math.floor(Math.round(arr.length / num));
    } else {
        pages = 1;
    }
    let itemLength = 0;
    let newArr = [];

    for(let i=0; i < pages; i++) {
        let oneArr = [];
        if(arr.length-itemLength >= num) {
            for(let j=0; j < num; j++) {
                oneArr.push(arr[itemLength]);
                itemLength = itemLength+1;  
            }
        } else {
            let newLength = arr.length-itemLength;
            for(let k=0; k < newLength; k++){
                oneArr.push(arr[itemLength]);
                itemLength = itemLength+1;  
            }
        }
        newArr.push(oneArr);
    }
    return newArr
}


export function sortByPrice(arr = [], value=1) {
    let newArr = arr.sort(function (a, b) {
        if (+a.price > +b.price) {
        return 1;
        }
        if (+a.price < +b.price) {
        return -1;
        }
        return 0;
    });
    if(value > 1) {
        newArr.reverse()
    }
    return newArr
};