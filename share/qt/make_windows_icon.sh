#!/bin/bash
# create multiresolution windows icon
ICON_DST=../../src/qt/res/icons/epocoin.ico

convert ../../src/qt/res/icons/epocoin-16.png ../../src/qt/res/icons/epocoin-32.png ../../src/qt/res/icons/epocoin-48.png ${ICON_DST}
