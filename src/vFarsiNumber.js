function formatAndConvertNumber(str) {
    const raw = str.toString().replace(/,/g, '');
  
    if (!/^\d+(\.\d+)?$/.test(raw)) return str;
  
    const parts = raw.split('.');
    const intPart = parts[0];
    const decimalPart = parts[1] ? parts[1] : '';
  
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    const combined = decimalPart ? formattedInt + '٫' + decimalPart : formattedInt;
  
    const toPersian = combined.replace(/[0-9]/g, function (w) {
      return String.fromCharCode(w.charCodeAt(0) + 1728);
    });
  
    return toPersian;
  }
  
  export default {
    mounted(el, binding) {
      el.innerText = formatAndConvertNumber(binding.value ?? el.innerText);
    },
    updated(el, binding) {
      el.innerText = formatAndConvertNumber(binding.value ?? el.innerText);
    }
  }