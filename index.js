// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// const listBelanjaan = null;
const listBelanjaan = (dataArrBelanjaan) => {
  let returnVariable = []; // set empty array
  for (let i = 0; i < dataArrBelanjaan.length; i++) {
    returnVariable.push("- " + dataArrBelanjaan[i].nama + " x " + dataArrBelanjaan[i].kuantitas);
  }
  return returnVariable;
};



// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// const totalBelanjaan = null;
const totalBelanjaan = (dataArrBelanjaan) => {
  let returnVariable = 0; // set default value 0
  for (let i = 0; i < dataArrBelanjaan.length; i++) {
    returnVariable += dataArrBelanjaan[i].kuantitas * dataArrBelanjaan[i].harga;
  }
  return returnVariable;
};




// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );

  console.log("################");
  console.log(listBelanjaan(dataBelanjaan)[0])
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
