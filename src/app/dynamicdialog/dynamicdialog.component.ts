import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicdialog',
  templateUrl: './dynamicdialog.component.html',
  styleUrls: ['./dynamicdialog.component.css']
})
export class DynamicdialogComponent implements OnInit {

  constructor() { }
  splitted: any = [
    [],[]
  ]

  ngOnInit() {
    let marpels = [1, 1, 1, 1, 1, 2]

    let sum = [0, 0]
    let add = (idx:number, amount, cnt) => {
      splitted[idx].push(amount * cnt)
      sum[idx] = amount * cnt
    }
    for(let i = marpels.length; i > 0; i--) {
      let m = marpels[i - 1]
      if(m == 0)
        continue
      let addRestIdx = sum[0] < sum[1] ? 0 : 1
      if(m == 1)
        add(addRestIdx, i, m)
      if(m % 2)
        add(addRestIdx, i, 1)
      add(0, i, m / 2)
      add(1, i, m / 2)
    }
  }

}