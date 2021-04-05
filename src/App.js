/**
 * İstenen görevde; bir excel datasını browserden/dışardan alıp tekrar browsere listelememiz istenmektedir.
 * Alınan data browsere yazdırılabilmesi için Json formatına çevirlemelidir.
 * -excel dosyalarını okuyup data yapısını dönüştürebilmek için npm "xlsx" modülünü dahil etmeliyiz.
 * Görevde dosya yapısı özel olarak istenmiştir.
 *  -services dosyası açılıp
 *  -- excelService.js de datayı okuyup Json a çevirmemiz isteniyor.
 *  - Components dosyasında ise
 *  -- ExcelTable.js dosyası açıp veriyi browsere tablo halinde yazdırmamız isteniyor.
 */

import './App.css';
import ReadExcel from './services/excelService';

//datayı browser den input ile alıp ReadExcel fonksiyonuna gönderme.
function App() {
 

  return(
    <div className="App">
      <header className="App-header">
      <div className="input">
      <input type="file"  onChange={(e)=>{
        const file = e.target.files[0];
        ReadExcel(file)
      }}/> 
    
      </div>
      <table className="table table-striped">
        <thead id="thead">
         
        </thead>
        <tbody id="products">
        </tbody>
      </table>
      </header>
    </div>
  );  
}

export default App;
