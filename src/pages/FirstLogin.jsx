import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function getStrength(password) {
  let score = 0
  if (password.length >= 8) score += 25
  if (/[A-Z]/.test(password)) score += 25
  if (/[a-z]/.test(password)) score += 25
  if (/[0-9]/.test(password)) score += 25
  return score
}

function getStrengthLabel(score) {
  if (score === 0) return ''
  if (score <= 25) return 'Faible'
  if (score <= 50) return 'Moyen'
  if (score <= 75) return 'Fort'
  return 'Très fort'
}

function getStrengthColor(score) {
  if (score <= 25) return 'var(--danger-color)'
  if (score <= 50) return 'var(--warning-color)'
  if (score <= 75) return 'var(--primary-color)'
  return 'var(--success-color)'
}

export default function FirstLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })

  const strength = getStrength(form.newPassword)
  const strengthLabel = getStrengthLabel(strength)
  const strengthColor = getStrengthColor(strength)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.newPassword !== form.confirmPassword) return
    navigate('/')
  }

  return (
    <div>
      <div className="logo">
        <h1>🔒 Première connexion</h1>
        <p>Veuillez changer votre mot de passe</p>
      </div>

      <div className="alert alert-info">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          Pour des raisons de sécurité, vous devez changer votre mot de passe temporaire lors de votre première connexion.
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="currentPassword">Mot de passe temporaire</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder="Mot de passe reçu par email"
            value={form.currentPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="••••••••"
            value={form.newPassword}
            onChange={handleChange}
            required
          />
          <small>Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.</small>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="••••••••"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password strength indicator */}
        {form.newPassword.length > 0 && (
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Force du mot de passe</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: strengthColor }}>{strengthLabel}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${strength}%`, backgroundColor: strengthColor, transition: 'width 0.3s, background-color 0.3s' }}
              ></div>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-full">
          Changer le mot de passe
        </button>
      </form>
    </div>
  )
}
