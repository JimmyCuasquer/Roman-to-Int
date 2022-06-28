import { createSlice } from "@reduxjs/toolkit";

export const convertSlice = createSlice({
  name: "convert",
  initialState: {
    value: "",
  },
  reducers: {
    romanToDecimal: (state, action) => {
      state.value = 0
      function char_to_int(c){
        switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
        }
        }
      if (action.payload == null) 
      return -1;
      state.value = char_to_int(action.payload.charAt(0));
      let pre
      let curr

      for (var i = 1; i < action.payload.length; i++) {
        curr = char_to_int(action.payload.charAt(i));
        pre = char_to_int(action.payload.charAt(i - 1));
        if (curr <= pre) {
          state.value += curr;
        } else {
          state.value = state.value - pre * 2 + curr;
        }
      }

      return state;
      
    },
    decimalToRoman: (state, action) => {
      state.value = "";
      const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };
      state.value = "";
      let i;
      for (i in lookup) {
        while (action.payload >= lookup[i]) {
          console.log(i);
          state.value += i;
          action.payload -= lookup[i];
        }
      }
      return state;
    },
  },
});

export const { romanToDecimal, decimalToRoman } = convertSlice.actions;

export default convertSlice.reducer;
