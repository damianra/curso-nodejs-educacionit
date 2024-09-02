import * as fs from 'fs';

fs.readFile('./servidor.mjs', { encoding: 'utf8'}, (err, d)=> {
    if (err) throw err;
   let data = d.replaceAll('a', 'u');
   data = data.replaceAll('e', 'o');
   data = data.replaceAll('o', 'e');
   data = data.replaceAll('u', 'a');

    fs.writeFileSync('./encoded.dat', data);
    console.log('Archivo guardado con exito')
  });