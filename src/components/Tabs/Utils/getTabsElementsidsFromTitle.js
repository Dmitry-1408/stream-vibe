import getIdFromTitle from "@/utils/getidFromTitle";

const getTabsElementsidsFromTitle = (title) => {
  const titleFormated = getIdFromTitle(title)
  const buttonId = `${titleFormated}-tab`
  const contentId = `${titleFormated}-tabpanel`

  return {
    buttonId: `${titleFormated}-tab`,
    contentId: `${titleFormated}-tabpanel`,
  }
}

export default getTabsElementsidsFromTitle