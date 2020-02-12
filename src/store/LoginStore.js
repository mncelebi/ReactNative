import {observable} from 'mobx'; // Gerekli importları yaptık

class CounterStore {
  @observable isim = 'Muhammed'; //observable decorator ile count isminde bir değişken tanımladık
  @observable soyisim = 'Çelebi';
  @observable kullaniciAdi = 'mnc123';
}
export default new CounterStore();
