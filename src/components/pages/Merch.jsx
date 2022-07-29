import React from 'react'
import "../pages/merch.css"
import { useTranslation } from 'react-i18next'

const Merch = () => {
  const [t, i18n] = useTranslation ("global")
  return (
<>
<body id="bodymerch">
<h1 id="merchtitle"> {t("merchsoon")} </h1>



</body>

</>




    )
}

export default Merch