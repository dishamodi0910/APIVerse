const { exec } = require('child_process');
const path = require('path');

const controllers = {
  translate: (req, res) => {
    const { text, source_language, target_language } = req.body;
    const scriptPath = path.resolve(__dirname, '../translate.py');
    const command = `python ${scriptPath} "${text}" "${source_language}" "${target_language}"`;

    console.log('Received request:', req.body);
    // console.log('Executing command:', command);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing command:', error.message);
        res.status(500).json({ error: error.message });
        return;
      }
      if (stderr) {
        console.error('Standard error output:', stderr);
        res.status(500).json({ error: stderr });
        return;
      }
      console.log('Command output:', JSON.parse(stdout));
      res.json(JSON.parse(stdout));
    });
  },
};

module.exports = controllers;
