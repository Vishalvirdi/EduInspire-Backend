const submitData = (req, res) => {
  const {
    name,
    email,
    content,
    address,
    image,
    video,
    movielink,
    title,
    description,
  } = req.body;
  res.json({
    success: true,
    message: "Data received successfully",
    data: {
      name,
      email,
      content,
      address,
      image,
      video,
      movielink,
      title,
      description,
    },
  });
};

const getData = (req, res) => {
  res.json({ working: " done" });
};

export { submitData,getData };
