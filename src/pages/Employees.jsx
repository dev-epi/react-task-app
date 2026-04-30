import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const initialEmployees = [
  { initials: 'JD', name: 'Jean Dupont', role: 'Développeur Full Stack', email: 'jean.dupont@entreprise.com', since: 'Jan 2024', done: 10, total: 12, pct: 83, status: 'Actif', badgeClass: 'badge-success', barClass: 'success' },
  { initials: 'SM', name: 'Sophie Martin', role: 'Designer UI/UX', email: 'sophie.martin@entreprise.com', since: 'Mar 2024', done: 6, total: 8, pct: 75, status: 'Actif', badgeClass: 'badge-success', barClass: 'success' },
  { initials: 'PL', name: 'Pierre Leblanc', role: 'Développeur Backend', email: 'pierre.leblanc@entreprise.com', since: 'Fév 2024', done: 7, total: 15, pct: 47, status: 'En retard', badgeClass: 'badge-warning', barClass: 'warning' },
  { initials: 'MD', name: 'Marie Dubois', role: 'Chef de Projet', email: 'marie.dubois@entreprise.com', since: 'Jan 2024', done: 10, total: 10, pct: 100, status: 'Actif', badgeClass: 'badge-success', barClass: 'success' },
]

const emptyForm = { firstName: '', lastName: '', email: '', role: '', department: '', phone: '' }

export default function Employees() {
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState(emptyForm)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setShowModal(false)
    setForm(emptyForm)
  }

  return (
    <>
      <Navbar
        title="Gestion des Employés"
        actions={
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Ajouter un employé
          </button>
        }
      />

      <div className="content-area">
        <div className="card">
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div className="form-group" style={{ flex: 1, minWidth: '250px', margin: 0 }}>
              <input type="text" placeholder="Rechercher un employé..." style={{ margin: 0 }} />
            </div>
            <div className="form-group" style={{ width: '200px', margin: 0 }}>
              <select style={{ margin: 0 }}>
                <option>Tous les statuts</option>
                <option>Actif</option>
                <option>En retard</option>
                <option>Inactif</option>
              </select>
            </div>
            <div className="form-group" style={{ width: '200px', margin: 0 }}>
              <select style={{ margin: 0 }}>
                <option>Tous les départements</option>
                <option>Développement</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
          {initialEmployees.map((emp) => (
            <div className="card" key={emp.email}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div className="user-avatar" style={{ width: '56px', height: '56px', fontSize: '20px' }}>{emp.initials}</div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>{emp.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{emp.role}</p>
                  </div>
                </div>
                <span className={`badge ${emp.badgeClass}`}>{emp.status}</span>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {emp.email}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Membre depuis {emp.since}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Tâches en cours</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{emp.done}/{emp.total} terminées</span>
                </div>
                <div className="progress-bar">
                  <div className={`progress-bar-fill ${emp.barClass}`} style={{ width: `${emp.pct}%` }}></div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-outline" style={{ flex: 1 }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Voir détails
                </button>
                <button className="btn btn-outline">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Ajouter un nouvel employé</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: 'var(--text-secondary)' }}>&times;</button>
            </div>
            <div className="modal-body">
              <form id="addEmployeeForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">Prénom *</label>
                  <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Nom *</label>
                  <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="empEmail">Email *</label>
                  <input type="email" id="empEmail" name="email" placeholder="prenom.nom@entreprise.com" value={form.email} onChange={handleChange} required />
                  <small>Un email d'invitation sera envoyé à cette adresse</small>
                </div>
                <div className="form-group">
                  <label htmlFor="empRole">Rôle *</label>
                  <input type="text" id="empRole" name="role" placeholder="Ex: Développeur Full Stack" value={form.role} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="department">Département *</label>
                  <select id="department" name="department" value={form.department} onChange={handleChange} required>
                    <option value="">Sélectionner un département</option>
                    <option value="dev">Développement</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Ventes</option>
                    <option value="hr">Ressources Humaines</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+216 XX XXX XXX" value={form.phone} onChange={handleChange} />
                </div>
                <div className="alert alert-info">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>L'employé recevra un email avec un mot de passe temporaire qu'il devra changer lors de sa première connexion.</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Annuler</button>
              <button type="submit" form="addEmployeeForm" className="btn btn-primary">Ajouter l'employé</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
