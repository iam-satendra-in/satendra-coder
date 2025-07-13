import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SQr {
  
generateMatrix(data: string): number[][] {
    const size = 21;
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));

    // Add finder patterns
    this.addFinderPattern(matrix, 0, 0);
    this.addFinderPattern(matrix, 0, size - 7);
    this.addFinderPattern(matrix, size - 7, 0);

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
      matrix[6][i] = i % 2;
      matrix[i][6] = i % 2;
    }

    // Dummy data bits fill (for demo)
    let row = size - 1, col = size - 1, bit = 1;
    while (col > 0) {
      if (col === 6) col--; // Skip timing line
      for (let r = 0; r < size; r++) {
        const y = (col % 4 === 0) ? size - r - 1 : r;
        if (matrix[y][col] === 0) matrix[y][col] = bit;
        if (matrix[y][col - 1] === 0) matrix[y][col - 1] = bit;
        bit = 1 - bit;
      }
      col -= 2;
    }

    return matrix;
  }

  private addFinderPattern(matrix: number[][], row: number, col: number) {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const isBorder = r === -1 || r === 7 || c === -1 || c === 7;
        const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        const val = isBorder || isInner ? 1 : 0;
        const rr = row + r;
        const cc = col + c;
        if (matrix[rr] && matrix[rr][cc] !== undefined) {
          matrix[rr][cc] = val;
        }
      }
    }
  }
}
