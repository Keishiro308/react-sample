import React, { useState, useEffect } from 'react'

const UPDATE_INTERVAL = 1000

const KEY_LOCALE = "KEY_LOCALE"

enum Locale {
  EN = "en-US",
  JA = "ja-JP",
}

const getLocaleFromString = (locale: string): Locale => {
  switch (locale) {
    case Locale.EN:
      return Locale.EN
    case Locale.JA:
      return Locale.JA
    default:
      return Locale.EN
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState<Locale>(Locale.EN)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_INTERVAL)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleDateString(locale)}</span>
        <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}