import React from 'react'

export default function CriptoSearchForm() {
  return (
    <form
      className='form'
    >
        <div className='field'>
            <label htmlFor="currency">Moneda:</label>
            <select
                name="currency"
                id="currency"
            >
                <option value="">-- Seleccione --</option>
            </select>
        </div>

        <div className='field'>
            <label htmlFor="criptomoneda">Criptomoneda:</label>
            <select
                name="criptomoneda"
                id="criptomoneda"
            >
                <option value="">-- Seleccione --</option>
            </select>
        </div>

        <input type='submit' value='Cotizar' />
    </form>
  )
}
