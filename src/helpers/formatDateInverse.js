import moment from "moment"

export const formatDateInverse = (startTreatment, finishTreatment) => {
   const newStartTreatment =  moment(startTreatment, 'YYYY-MM-DD').format("DD/MM/YYYY");
   const newFinishTreatment =  moment(finishTreatment, 'YYYY-MM-DD').format("DD/MM/YYYY");
   return { newStartTreatment, newFinishTreatment}
}
