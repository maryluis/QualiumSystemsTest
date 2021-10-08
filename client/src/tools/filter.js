



export function filterItems(string, arr) {
    return arr.filter(function(el) {
        return el.title.toLowerCase().indexOf(string.toLowerCase()) > -1;
    })
  }