import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('O nome é obrigatório'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('O sobrenome é obrigatório'),
    email: Yup.string().email('Invalid email').required(),
    age: Yup.number().required('A idade é obrigatória').positive('A idade deve ser um número positivo').integer('A idade deve ser um número inteiro')
    .min(18, 'Você deve ter pelo menos 18 anos'),
    birthday: Yup
    .date()
    .required('A data de nascimento é obrigatória')
    .max(new Date(), 'A data de nascimento não pode ser no futuro')
    .test(
      'is-adult',
      'Você deve ter pelo menos 18 anos',
      function (value) {
        const cutoffDate = new Date();
        cutoffDate.setFullYear(cutoffDate.getFullYear() - 18);
        return value <= cutoffDate;
      }
    ),
  });