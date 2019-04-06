
'use strict'
class TshirtCategory {
  constructor(cattegoryBTN, photoDIV) {
    this.cattegoryBTN = cattegoryBTN
    this.photoDIV = photoDIV
  }
}

const Woman =  new TshirtCategory('#btnWoman', '#photoWoman')
const Man =  new TshirtCategory('#btnMan', '#photoMan')
const Preg = new TshirtCategory('#btnPreg', '#photoPreg')
const Kids = new TshirtCategory('#btnKids', '#photoKids')
const Custom = new TshirtCategory('#btnCustom', '#photoCustom')

const groupCategories = [Woman, Man, Preg, Kids, Custom]

$('.photoCategory:not(:first)').hide()


$(Woman.cattegoryBTN).click(function(){
    $(Woman.photoDIV).toggle()
    $(Man.photoDIV).hide()
    $(Preg.photoDIV).hide()
    $(Kids.photoDIV).hide()
    $(Custom.photoDIV).hide()
})
$(Man.cattegoryBTN).click(function(){
    $(Man.photoDIV).toggle()
    $(Woman.photoDIV).hide()
    $(Preg.photoDIV).hide()
    $(Kids.photoDIV).hide()
    $(Custom.photoDIV).hide()
})
$(Preg.cattegoryBTN).click(function(){
    $(Preg.photoDIV).toggle()
    $(Woman.photoDIV).hide()
    $(Man.photoDIV).hide()
    $(Kids.photoDIV).hide()
    $(Custom.photoDIV).hide()
})
$(Kids.cattegoryBTN).click(function(){
    $(Kids.photoDIV).toggle()
    $(Woman.photoDIV).hide()
    $(Man.photoDIV).hide()
    $(Preg.photoDIV).hide()
    $(Custom.photoDIV).hide()
})
$(Custom.cattegoryBTN).click(function(){
    $(Custom.photoDIV).toggle()
    $(Woman.photoDIV).hide()
    $(Man.photoDIV).hide()
    $(Kids.photoDIV).hide()
    $(Preg.photoDIV).hide()
})
