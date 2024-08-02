import Decimal from 'decimal.js';


export const calculerAmortissement = (valeurAcquisition, valeurResiduelle, dureeAmortissement) => {
    if (dureeAmortissement === 0) {
      return new Decimal(0);
    }
    const acquisition = new Decimal(valeurAcquisition);
    const residuelle = new Decimal(valeurResiduelle);
    const duree = new Decimal(dureeAmortissement);
    
    return acquisition.minus(residuelle).dividedBy(duree);
  };
  
  
export const calculerTTC = ({ montantHT, tauxTVA }) => {
      const montantHTDecimal = new Decimal(montantHT);
      const tauxTVADecimal = new Decimal(tauxTVA);
      const ttc = montantHTDecimal.times(new Decimal(1).plus(tauxTVADecimal.dividedBy(100))).toDecimalPlaces(2);
      return ttc.toNumber();
    };
  
export const calculerMarge = ({ chiffreAffaires, coutVentes }) => {
      const margeBrute = chiffreAffaires.minus(coutVentes);
      const margeNette = margeBrute.div(chiffreAffaires).times(100);
      return {
        margeBrute,
        margeNette
      };
    };
    
export const calculerSalaireNet = ({ salaireBrut, cotisationsSociales }) => {
      return salaireBrut.minus(cotisationsSociales);
    };
  
  
export const calculerTVA = ({ totalTTC, tauxTVA }) => {
      const totalTTCDecimal = new Decimal(totalTTC);
      const tauxTVADecimal = new Decimal(tauxTVA);
      const divisor = new Decimal(100).plus(tauxTVADecimal);
      const tva = totalTTCDecimal.times(tauxTVADecimal).dividedBy(divisor).toDecimalPlaces(2);
      const totalHT = totalTTCDecimal.minus(tva).toDecimalPlaces(2);
    
      return {
        montantTVA: tva.toNumber(),
        totalHT: totalHT.toNumber(),
      };
    };
    
  
export const calculateTotal = (values) => {
      return values.reduce((acc, val) => acc.plus(val), new Decimal(0));
    };