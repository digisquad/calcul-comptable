// helpers.test.js
import { 
    calculerAmortissement, 
    calculerTTC, 
    calculerMarge, 
    calculerSalaireNet, 
    calculerTVA, 
    calculateTotal 
  } from '@/components/helpers';
  import Decimal from 'decimal.js';
  
  describe('calculerAmortissement', () => {
    test('should return 0 if dureeAmortissement is 0', () => {
      expect(calculerAmortissement(1000, 100, 0).toNumber()).toBe(0);
    });
  
    test('should calculate amortissement correctly', () => {
      expect(calculerAmortissement(1000, 100, 10).toNumber()).toBe(90);
    });
  });
  
  describe('calculerTTC', () => {
    test('should calculate TTC correctly', () => {
      expect(calculerTTC({ montantHT: 100, tauxTVA: 20 })).toBe(120);
    });
  });
  
  describe('calculerMarge', () => {
    test('should calculate marge correctly', () => {
      const result = calculerMarge({ chiffreAffaires: new Decimal(1000), coutVentes: new Decimal(600) });
      expect(result.margeBrute.toNumber()).toBe(400);
      expect(result.margeNette.toNumber()).toBeCloseTo(40);
    });
  });
  
  describe('calculerSalaireNet', () => {
    test('should calculate salaire net correctly', () => {
      expect(calculerSalaireNet({ salaireBrut: new Decimal(3000), cotisationsSociales: new Decimal(500) }).toNumber()).toBe(2500);
    });
  });
  
  describe('calculerTVA', () => {
    test('should calculate TVA correctly', () => {
      const result = calculerTVA({ totalTTC: 120, tauxTVA: 20 });
      expect(result.montantTVA).toBeCloseTo(20);
      expect(result.totalHT).toBeCloseTo(100);
    });
  });
  
  describe('calculateTotal', () => {
    test('should calculate total correctly', () => {
      const values = [new Decimal(10), new Decimal(20), new Decimal(30)];
      expect(calculateTotal(values).toNumber()).toBe(60);
    });
  });