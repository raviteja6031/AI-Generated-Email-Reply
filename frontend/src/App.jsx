import { useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  CssBaseline,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

// Define Light and Dark Themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue for buttons
    },
    secondary: {
      main: '#d32f2f', // Red for secondary actions
    },
    background: {
      default: '#f5f5f5', // Light background
      paper: '#ffffff', // White for cards
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#555555', // Grey text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue for buttons
    },
    secondary: {
      main: '#f48fb1', // Pink for secondary actions
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter dark for cards
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#aaaaaa', // Grey text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false); // State for theme toggle

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Resets styles to match the active theme */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h3" component="h1">
            Email Reply Generator
          </Typography>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
            label={darkMode ? 'Dark Mode' : 'Light Mode'}
          />
        </Box>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Grid container spacing={3}>
            {/* Email Content Input Goes Here */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                label="Original Email Content"
                value={emailContent || ''}
                onChange={(e) => setEmailContent(e.target.value)}
                placeholder="Paste the original email content here..."
              />
            </Grid>

            {/* Tone Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="tone-label">Tone (Optional)</InputLabel>
                <Select
                  labelId="tone-label"
                  value={tone || ''}
                  onChange={(e) => setTone(e.target.value)}
                  label="Tone (Optional)"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="professional">Professional</MenuItem>
                  <MenuItem value="casual">Casual</MenuItem>
                  <MenuItem value="friendly">Friendly</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Generate Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!emailContent || loading}
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reply'}
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ mt: 3, textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        {/* Generated Reply */}
        {generatedReply && (
          <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply || ''}
              inputProps={{ readOnly: true }}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigator.clipboard.writeText(generatedReply)}
              sx={{ mt: 2 }}
            >
              Copy to Clipboard
            </Button>
          </Paper>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
