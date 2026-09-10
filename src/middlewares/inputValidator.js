import Joi from 'joi';

const noteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const validateNote = (req, res, next) => {
  const { error } = noteSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  }
  next();
};

export default validateNote;
