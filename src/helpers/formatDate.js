import moment from "moment"

export const formatDate = (startTreatment, finishTreatment) => {
   const newStartTreatment =  moment(startTreatment, 'DD/MM/YYYY').format("YYYY-MM-DD");
   const newFinishTreatment =  moment(finishTreatment, 'DD/MM/YYYY').format("YYYY-MM-DD");
   return { newStartTreatment, newFinishTreatment}
}
