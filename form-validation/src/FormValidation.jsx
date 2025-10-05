import { useState } from 'react';

function FormValidation() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [colors, setColors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const Validate = (e) => {
        e.preventDefault();
        const newErrors = {};
        const newColors = {};

        // Username
        if (formData.username.length >= 8) {
            newColors.username = 'green';
        } else {
            newErrors.username = 'Username must be at least 8 characters long';
            newColors.username = 'red';
        }

        // Email
        if (validateEmail(formData.email)) {
            newColors.email = 'green';
        } else {
            newErrors.email = 'Email address is invalid';
            newColors.email = 'red';
        }

        // Password
        if (formData.password.length >= 8) {
            newColors.password = 'green';
        } else {
            newErrors.password = 'Password must be at least 8 characters long';
            newColors.password = 'red';
        }

        // Confirm Password
        if (formData.confirmPassword === formData.password && formData.confirmPassword !== '') {
            newColors.confirmPassword = 'green';
        } else {
            newErrors.confirmPassword = 'Passwords do not match';
            newColors.confirmPassword = 'red';
        }

        setErrors(newErrors);
        setColors(newColors);

        // If valid
        const isValid = Object.keys(newErrors).length === 0;
        if (isValid) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

    return (
        <div className="card">
            <div className="card-image"></div>

            <form onSubmit={Validate}>
                {showSuccess && <div>✅ Form submitted successfully!</div>}

                {/* Username */}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    style={{ borderColor: colors.username }}
                />
                <p className="error">{errors.username}</p>

                {/* Email */}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: colors.email }}
                />
                <p className="error">{errors.email}</p>

                {/* Password */}
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ borderColor: colors.password }}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? '👁️' : '🙈'}
                    </button>
                </div>
                <p className="error">{errors.password}</p>

                {/* Confirm Password */}
                <div className="password-container">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={{ borderColor: colors.confirmPassword }}
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? '👁️' : '🙈'}
                    </button>
                </div>
                <p className="error">{errors.confirmPassword}</p>

                <button className="submit-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormValidation;
