import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.scss"],
})
export class ConverterComponent implements OnInit {
  firstValue: string = "";
  secondValue: string = "";
  thirdValue: string = "";
  fourthValue: string = "";

  binToDecimal: number = 0;
  hexToDecimal: number = 0;
  decimalToBin: string = "0";
  decimalToHex: string = "0";

  constructor() {}

  ngOnInit(): void {}

  binToDecimalCalculate(): void {
    const binToDecimal: number = parseInt(this.firstValue, 2);
    if (isNaN(binToDecimal)) {
      return;
    }

    this.binToDecimal = binToDecimal;
  }

  hexToDecimalCalculate(): void {
    const hexToDecimal: number = parseInt(this.secondValue, 16);
    if (isNaN(hexToDecimal)) {
      return;
    }

    this.hexToDecimal = hexToDecimal;
  }

  decimalToBinCalculate(): void {
    const decimalToBin: string = parseInt(this.thirdValue, 10).toString(2);
    if (isNaN(Number(decimalToBin))) {
      return;
    }

    this.decimalToBin = decimalToBin;
  }

  decimalToHexCalculate(): void {
    const decimalToHex: string = parseInt(this.fourthValue, 10).toString(16);
    if (isNaN(Number(decimalToHex))) {
      return;
    }

    this.decimalToHex = decimalToHex;
  }
}
