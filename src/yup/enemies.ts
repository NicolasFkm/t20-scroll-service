import * as yup from 'yup';

export const yupCreateEnemyInput = yup.object().shape({
  name: yup.string().required(),
  difficult: yup.number().required(),
  initiative: yup.number().required().positive().integer(),
  perception: yup.number().required().positive().integer(),
  armor: yup.number().required().positive().integer(),
  healthPoints: yup.number().required().positive().integer(),
  movement: yup.number().required().positive(),
  level: yup.number().required(),
  size: yup.string().required(),
});
