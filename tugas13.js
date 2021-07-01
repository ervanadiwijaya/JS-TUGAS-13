var buah = ['Pisang','Jeruk'];

function addData() {
    buah.unshift('Apel','Mangga');
    return buah;
}

console.log(buah);
console.log(addData());