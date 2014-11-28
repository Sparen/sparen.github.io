;;This is code made by Andrew Fan. DO NOT copy and claim this work as your own.

                                                                                                                                                                                                        extensions [ sound ] breed [ Veemons Veemon ] breed [ bosses boss ] breed [ bullets bullet ] breed [ bulletXs bulletX ] breed [ bulletIs bulletI ] breed [ lasers laser ] breed [ shots shot ] breed [ Fshots Fshot ] breed [ satoris satori ] breed [ enemies enemy ] breed [ shikigamis shikigami ] breed [ options option ] breed [ icons icon ] breed [ Bshots Bshot ] turtles-own [ a4048 a6102 a4545 a1292 a6989 a5440 a8255 a4258 a9679 a8073 a5909 a7812 a6292 ] patches-own [ a1327 a9958 a3059 ] globals [ a1853 a4116 a8444 a2951 a9609 a5438 a7316 a1862 a9633 a9101 a7281 a8814 ] icons-own [ a5679 ] to a7915 resize-world -28 28 -33 33 set-patch-size 6 a9697 set show-shots? true set sfx true set clear-bullets? false set a9101 "Veemon" set Difficulty "Normal" set show-background? false end to a9697 ca reset-ticks ask patches [ set a1327 pcolor ] ask patches [ set plabel-color gray ] ask patches [ set plabel "" ] set-default-shape bullets "Hbullet" set-default-shape bulletXs "bullet1" set-default-shape bulletIs "bullet1" set-default-shape Veemons "Veemon" set-default-shape shots "Vcannon" set-default-shape Fshots "hbullet" set-default-shape options "hakkero" set-default-shape shikigamis "shikigami" set-default-shape Satoris "satori" set-default-shape Lasers "laser1" set a1853 0 create-Veemons 1 [ set color sky set a4048 200 set size 7 set heading 0 set a6102 100 ] create-Satoris 1 [ set color magenta set a4048 200000 set size 1 set a4116 0 set ycor -32 set heading 0 ] create-options 2 [ set a4048 250 set size 3 set heading 0 set color blue ] set a8444 0 set a9101 "Veemon" set a7316 0 set BSA false set emergency_stop false end to a5450 set a7316 a7316 - 1 ask bulletIs [ set a5909 a5909 - 1 if a5909 = 0 [ set a4545 0 ] ] ask patches with [ a9958 = 1 and a3059 > 0 ] [ set a3059 a3059 - 1 ] if a7281 > 0 [ set a7281 a7281 - 1 ] if a1862 > 0 [ set a1862 a1862 - 10 ] if a7281 = 0 and a9101 != "Veemon" [ set a9101 "Veemon" ask veemons [ set shape "veemon" ] ] ask bullets [ set label "" ] ask bulletXs [ set label "" ] ask lasers [ set label "" ] ask bulletIs with [ label != "" ] [ set label "" ] carefully [ ask patches with [ pxcor = [ pxcor ] of one-of bosses + 2 and pycor = -32 ] [ set plabel-color red set plabel "ENEMY" ] ] [ ] carefully [ ask patches with [ pycor = -32 and pxcor != [ pxcor ] of one-of bosses + 2 ] [ if count bosses with [ pxcor = [ pxcor ] of myself - 2 ] = 0 [ set plabel "" ] ] ] [ ] ask patches with [ a9958 = 2 ] [ ask shots-here [ set shape "dshot" set size 3 die ] ] ask bulletXs with [ a6989 = 0 ] [ a6894 ] ask lasers with [ a6989 = 0 ] [ a6894 ] ask bulletIs with [ a6989 = 0 ] [ a6894 ] ask enemies with [ a8255 > 0 ] [ a6894 ] ask shikigamis with [ a8255 > 0 ] [ a6894 ] ask turtles with [ a6989 = "wallbounce" ] [ a3956 ] ask turtles with [ a6989 = "skybounce" ] [ a1376 ] ask turtles with [ a6989 = "anglebounce" ] [ a2728 ] ask turtles with [ a6989 = "gravityexit" ] [ a3921 ] ask turtles with [ a6989 = "QED" ] [ a6454 ] ask turtles with [ a6989 = "4sides" ] [ a1731 ] ask turtles with [ a6989 = "shield" ] [ a6047 ] ask turtles with [ a6989 = "explode" ] [ a5223 ] ask Bshots [ ask bulletXs in-radius 10 [ die ] ask lasers in-radius 10 [ die ] ] if emergency_stop [ stop ] ask Veemons [ set xcor mouse-xcor set ycor mouse-ycor if a4048 < 1 [ die ] if a9101 = "Veemon" and not mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 3 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 3 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] ] if a9101 = "Veemon" and mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 1.5 ) ( first [ ycor ] of Veemons + 1.5 ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 1.5 ) ( first [ ycor ] of Veemons + 1.5 ) ] [ ] ] ] [ ] ] if a9101 = "ExVeemon" and not mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 3 ) ( first [ ycor ] of Veemons + 1.5 ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 3 ) ( first [ ycor ] of Veemons + 1.5 ) ] [ ] ] ] [ ] ] if a9101 = "ExVeemon" and mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 1 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 1 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] ] if a9101 = "Fladramon" and not mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 5 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 5 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] ] if a9101 = "Fladramon" and mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 8 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 8 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] ] if a9101 = "Lighdramon" and not mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 2.4 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 2.4 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] ] if a9101 = "Lighdramon" and mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons ) ( first [ ycor ] of Veemons + 3 ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons ) ( first [ ycor ] of Veemons - 3 ) ] [ ] ] ] [ ] ] if a9101 = "Magnamon" and not mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 2 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 2 ) ( first [ ycor ] of Veemons ) ] [ ] ] ] [ ] ] if a9101 = "Magnamon" and mouse-down? [ carefully [ ask option 2 [ carefully [ setxy ( first [ xcor ] of Veemons + 1 ) ( first [ ycor ] of Veemons + 1 ) ] [ ] ] ] [ ] carefully [ ask option 3 [ carefully [ setxy ( first [ xcor ] of Veemons - 1 ) ( first [ ycor ] of Veemons + 1 ) ] [ ] ] ] [ ] ] if not mouse-down? and a9101 = "Veemon" [ hatch-shots 1 [ set size 3 set heading 0 carefully [ set xcor xcor + 1 ] [ ] ] hatch-shots 1 [ set size 3 set heading 0 carefully [ set xcor xcor - 1 ] [ ] ] hatch-shots 1 [ set size 3 set heading 0 ] ask options [ hatch-shots 1 [ set size 3 set heading 0 ] ] ] if not mouse-down? and a9101 = "ExVeemon" [ hatch-shots 1 [ set size 3 set heading 0 set shape "xlaser" set a5440 "xlaser" ] hatch-shots 1 [ set size 3 set heading 0 ] ask options [ hatch-shots 1 [ set size 3 set heading 0 ] ] ] if not mouse-down? and a9101 = "Fladramon" [ hatch-shots 1 [ set size 3 set heading 5 set shape "fcannon" ] hatch-shots 1 [ set size 3 set heading 355 set shape "fcannon" ] hatch-shots 1 [ set size 3 set heading 0 set shape "fcannon" ] ask option 2 [ hatch-shots 1 [ set size 3 set heading 20 set shape "fcannon" ] ] ask option 3 [ hatch-shots 1 [ set size 3 set heading 340 set shape "fcannon" ] ] ] if not mouse-down? and a9101 = "Lighdramon" [ ask options [ hatch-shots 1 [ set size 2 set shape "laser3" set heading 0 ] ] hatch-shots 1 [ set size 2 set shape "laser3" set heading 180 ] hatch-shots 1 [ set size 2 set shape "laser3" set heading 60 ] hatch-shots 1 [ set size 2 set shape "laser3" set heading 300 ] ] if not mouse-down? and a9101 = "Magnamon" [ ask options [ hatch-shots 1 [ set size 3 set shape "mcannon" set heading 0 set a5440 "Missile" ] ] hatch-shots 3 [ set size 3 set shape "mcannon" set heading 0 set a5440 "Missile" if count enemies > 0 [ face one-of enemies ] ] ask shots with [ a5440 = "Missile" ] [ if count bosses > 0 [ face one-of bosses ] ] ] if mouse-down? and a9101 = "Veemon" [ hatch-shots 1 [ set size 3 set heading 2 ] hatch-shots 1 [ set size 3 set heading 358 ] hatch-shots 1 [ set size 3 set heading 0 ] ask options [ hatch-shots 1 [ set size 3 set heading 0 ] ] ] if mouse-down? and a9101 = "ExVeemon" [ hatch-shots 1 [ set size 3 set heading 0 ] ask options [ hatch-shots 1 [ set size 3 set shape "xlaser" set a5440 "xlaser" set heading 0 ] ] ] if mouse-down? and a9101 = "Fladramon" [ hatch-shots 1 [ set size 3 set heading 0 set shape "fcannon" ] hatch-shots 1 [ set size 3 set heading 5 set shape "fcannon" ] hatch-shots 1 [ set size 3 set heading 355 set shape "fcannon" ] ask option 2 [ hatch-shots 1 [ set size 3 set heading 350 set shape "fcannon" ] ] ask option 3 [ hatch-shots 1 [ set size 3 set heading 10 set shape "fcannon" ] ] ] if mouse-down? and a9101 = "Lighdramon" [ hatch-shots 1 [ set size 3 set heading 0 ] ask options [ hatch-shots 1 [ set size 2 set shape "laser3" set heading 5 ] hatch-shots 1 [ set size 2 set shape "laser3" set heading 355 ] ] ] if mouse-down? and a9101 = "Magnamon" [ hatch-shots 1 [ set size 3 set shape "mcannon" set heading 0 set a5440 "Missile" ] hatch-shots 1 [ set size 5 set shape "mcannon" carefully [ face one-of bosses ] [ ] set a5440 "EMissile" ] ask options [ hatch-shots 1 [ set size 3 set shape "mcannon" set heading 0 set a5440 "Missile" if count enemies > 0 [ face one-of enemies ] ] ] ask shots with [ a5440 = "Missile" ] [ if count bosses > 0 [ face one-of bosses ] ] ] ] ask Veemons [ if a7316 <= 0 [ if count bulletXs-here > 0 [ set a4048 ( a4048 - 10 ) ask bulletXs-here [ die ] if clear-bullets? [ a1578 ] if SFX [ sound:play-sound "death.wav" ] set a7316 100 set a7281 0 set a9101 "Veemon" set shape "veemon" ] if count lasers-here > 0 [ set a4048 ( a4048 - 10 ) ask lasers-here [ die ] if clear-bullets? [ a1578 ] if SFX [ sound:play-sound "death.wav" ] set a7316 100 set a7281 0 set a9101 "Veemon" set shape "veemon" ] if count bulletIs-here > 0 [ set a4048 ( a4048 - 10 ) if clear-bullets? [ a1578 ] if SFX [ sound:play-sound "death.wav" ] set a7316 100 set a7281 0 set a9101 "Veemon" set shape "veemon" ] if count bosses-here > 0 [ set a4048 ( a4048 - 5 ) if clear-bullets? [ a1578 ] if SFX [ sound:play-sound "death.wav" ] set a7316 100 set a7281 0 set a9101 "Veemon" set shape "veemon" ] if [ a9958 ] of patch-here = 1 [ set a4048 ( a4048 - 10 ) if SFX [ sound:play-sound "death.wav" ] set a7316 100 set a7281 0 set a9101 "Veemon" set shape "veemon" ] ] if a7316 > 0 [ ask bulletXs-here [ die ] ask lasers-here [ die ] ] if SFX [ if count bulletXs in-radius 3 with [ a4545 = 0 ] > 0 or count bulletIs in-radius 3 with [ a4545 = 0 ] > 0 or count lasers in-radius 3 with [ a4545 = 0 ] > 0 or count patches in-radius 3 with [ a9958 = 1 and a3059 = 0 ] > 0 [ sound:play-sound "graze.wav" ] ] set a4116 ( a4116 + ( count bulletXs in-radius 3 with [ a4545 = 0 ] * 2000 ) + ( count lasers in-radius 3 with [ a4545 = 0 ] * 2000 ) + ( count bulletIs in-radius 3 with [ a4545 = 0 ] * 200 ) + ( count patches in-radius 3 with [ a9958 = 1 and a3059 = 0 ] * 200 ) ) set a1853 ( a1853 + count bulletXs in-radius 3 with [ a4545 = 0 ] + count lasers in-radius 3 with [ a4545 = 0 ] + count bulletIs in-radius 3 with [ a4545 = 0 ] ) set a1853 ( a1853 + count patches in-radius 3 with [ a9958 = 1 and a3059 = 0 ] ) ask bulletXs in-radius 3 [ set a4545 1 ] ask lasers in-radius 3 [ set a4545 1 ] ask bulletIs in-radius 3 with [ a4545 = 0 ] [ set a4545 1 set a5909 10 ] ask patches in-radius 3 with [ a9958 = 1 ] [ set a3059 10 ] if count icons with [ a5679 = "extend" ] in-radius 3 > 0 [ set a4048 ( a4048 + ( 10 * count icons with [ a5679 = "extend" ] in-radius 3 ) ) set a9633 ( a9633 + ( 10 * count icons with [ a5679 = "extend" ] in-radius 3 ) ) ask icons with [ a5679 = "extend" ] in-radius 3 [ die ] if a9101 = "Veemon" [ a9256 ] if SFX [ sound:play-sound "extend.wav" ] ] if count icons with [ a5679 = "Courage" ] in-radius 3 > 0 [ if a9101 = "Fladramon" [ a9256 ] set a9101 "Fladramon" set shape "Fladramon" set a7281 20000 ask icons with [ a5679 = "Courage" ] in-radius 3 [ die ] ] if count icons with [ a5679 = "Neutral" ] in-radius 3 > 0 [ if a9101 = "ExVeemon" [ a9256 ] set a9101 "ExVeemon" set shape "ExVeemon" set a7281 2000 ask icons with [ a5679 = "Neutral" ] in-radius 3 [ die ] ] if count icons with [ a5679 = "Friendship" ] in-radius 3 > 0 [ if a9101 = "Lighdramon" [ a9256 ] set a9101 "Lighdramon" set shape "Lighdramon" set a7281 2000 ask icons with [ a5679 = "Friendship" ] in-radius 3 [ die ] ] if count icons with [ a5679 = "Miracles" ] in-radius 3 > 0 [ if a9101 = "Magnamon" [ a9256 ] set a9101 "Magnamon" set shape "Magnamon" set a7281 20000 ask icons with [ a5679 = "Miracles" ] in-radius 3 [ die ] ] if count icons with [ shape = "point" ] in-radius 3 > 0 [ if SFX [ sound:play-sound "item.wav" ] set a4116 a4116 + ( 10000 * count icons with [ shape = "point" ] in-radius 3 ) set a8814 a8814 + ( count icons with [ shape = "point" ] in-radius 3 ) ask icons with [ shape = "point" ] in-radius 3 [ die ] ] ] if emergency_stop [ stop ] if count Veemons = 0 [ stop ] ask shots [ set label "" fd 1 if abs ycor > 32 or abs xcor > 27 [ die ] if not show-shots? and shape != "hbullet" [ set shape "hbullet" ] if any? bosses in-radius 5 [ if shape != "xlaser" and shape != "laser3" [ set shape "dshot" set size 3 ] ask bosses in-radius 5 [ if a6989 != "shield" [ set a4048 a4048 - 1 set a4116 ( a4116 + 10 ) ] if a4048 < 1 [ a4902 die ] ] if shape != "xlaser" and shape != "laser3" [ set breed Fshots set hidden? true ] ] if any? enemies in-radius 5 [ if shape != "xlaser" and shape != "laser3" [ set shape "dshot" set size 3 ] ask enemies in-radius 5 [ if a6989 != "shield" [ set a4048 a4048 - 1 set a4116 ( a4116 + 10 ) ] if a4048 < 1 [ a4902 if SFX [ sound:play-sound "xenemy.wav" ] die ] ] if shape != "xlaser" and shape != "laser3" [ set breed Fshots set hidden? true ] ] if a5440 = "xlaser" or a5440 = "EMissile" [ set label "" fd 1 if abs ycor > 32 or abs xcor > 27 [ die ] if not show-shots? and shape != "hbullet" [ set shape "hbullet" ] if any? bosses in-radius 5 [ if shape != "xlaser" and shape != "laser3" [ set shape "dshot" set size 3 ] ask bosses in-radius 5 [ if a6989 != "shield" [ set a4048 a4048 - 1 set a4116 ( a4116 + 10 ) ] if a4048 < 1 [ a4902 die ] ] if shape != "xlaser" and shape != "laser3" [ set breed Fshots set hidden? true ] ] if any? enemies in-radius 5 [ if shape != "xlaser" and shape != "laser3" [ set shape "dshot" set size 3 ] ask enemies in-radius 5 [ if a6989 != "shield" [ set a4048 a4048 - 1 set a4116 ( a4116 + 10 ) ] if a4048 < 1 [ a4902 if SFX [ sound:play-sound "xenemy.wav" ] die ] ] if shape != "xlaser" and shape != "laser3" [ set breed Fshots set hidden? true ] ] ] ] ask Fshots [ set label "" fd 1 if abs ycor > 32 or abs xcor > 27 [ die ] ] ask Bshots [ set label "" fd a8255 if abs ycor > 32 or abs xcor > 27 [ die ] if any? bosses in-radius 10 [ ask bosses in-radius 10 [ if a6989 != "shield" [ set a4048 a4048 - 20 set a4116 ( a4116 + 10 ) ] if a4048 < 1 [ a4902 die ] ] die ] if any? enemies in-radius 10 [ ask enemies in-radius 10 [ if a6989 != "shield" [ set a4048 a4048 - 20 set a4116 ( a4116 + 10 ) ] if a4048 < 1 [ a4902 die ] ] die ] ] ask options [ set label "" ] if emergency_stop [ stop ] set a2951 ( a2951 - 1 ) if a2951 < 0 [ ask patches with [ pycor = -25 or pycor = -30 ] [ set plabel "" ] ] ask bosses [ set label a4048 if a4048 = 0 [ die ] ] ask enemies [ set label a4048 ] ask shikigamis [ set label "" ] ask icons [ set label "" ] if [ ycor ] of Veemon 0 > 20 [ ask icons with [ shape = "point" or shape = "exticon" ] [ if a6989 != "autocollect" [ set a6989 "autocollect" ] ] ] ask icons with [ shape != "bkgd" ] [ if ycor < -32.4 [ die ] fd .2 ] ask icons with [ shape = "bkgd" ] [ set heading heading + 1 ] ask icons with [ a6989 = "autocollect" ] [ carefully [ face Veemon 0 ] [ set heading 180 ] fd 1 ] if BSA [ ask bulletXs [ pd ] ask bulletIs [ pd ] ask lasers [ pd ] ] if emergency_stop [ stop ] if count Veemons = 0 [ stop ] end to a7162 set size 3 set heading 180 end to a4150 set size 3 set heading 0 end to a9256 ask icons with [ shape = "point" or shape = "exticon" ] [ set a6989 "autocollect" ] if a9101 = "Veemon" [ set a9609 1 repeat 3 [ hatch-bshots 1 [ set size 10 set shape "Vcannon" set color blue set heading 0 set a8255 a9609 ] set a9609 a9609 * .9 ] ask options [ set a9609 1 repeat 3 [ hatch-bshots 1 [ set size 10 set shape "Vcannon" set color blue set heading 0 set a8255 a9609 ] set a9609 a9609 * .9 ] ] if SFX [ sound:play-sound "spell.wav" ] ] if a9101 = "ExVeemon" [ ask patches with [ int pxcor = [ pxcor ] of veemon 0 and pycor > [ ycor ] of veemon 0 ] [ sprout-bshots 1 [ set size 10 set shape "xlaser" set heading 0 set a8255 1 ] ] ] if a9101 = "Fladramon" [ set a9609 0 set a9609 ( a9609 + 58 ) repeat 30 [ hatch-bshots 1 [ set size 10 set shape "fcannon" set a8255 1 set heading a9609 ] set a9609 a9609 - 4 ] set a9609 0 set a9609 ( a9609 + 58 ) repeat 30 [ hatch-bshots 1 [ set size 10 set shape "fcannon" set a8255 .85 set heading a9609 ] set a9609 a9609 - 4 ] set a9609 0 set a9609 ( a9609 + 58 ) repeat 30 [ hatch-bshots 1 [ set size 10 set shape "fcannon" set a8255 .7 set heading a9609 ] set a9609 a9609 - 4 ] if SFX [ sound:play-sound "spell.wav" ] ] if a9101 = "Lighdramon" [ carefully [ face one-of bosses ] [ ] set a9609 heading repeat 48 [ hatch-bshots 1 [ set size 10 set shape "vcannon" set a8255 1 set heading a9609 ] set a9609 ( a9609 + 7.5 ) ] set a9609 heading repeat 48 [ hatch-bshots 1 [ set size 10 set shape "vcannon" set a8255 .85 set heading a9609 ] set a9609 ( a9609 + 7.5 ) ] if SFX [ sound:play-sound "spell.wav" ] ] if a9101 = "Magnamon" [ ask patches with [ pycor = int [ ycor ] of veemon 0 and pxcor mod 2 = 0 ] [ sprout-bshots 1 [ set size 10 set heading 0 set a8255 .8 set shape "Mcannon" ] sprout-bshots 1 [ set size 10 set heading 180 set a8255 .8 set shape "Mcannon" ] ] ask patches with [ pxcor = int [ xcor ] of veemon 0 and pycor mod 2 = 0 ] [ sprout-bshots 1 [ set size 10 set heading 90 set a8255 .8 set shape "Mcannon" ] sprout-bshots 1 [ set size 10 set heading 270 set a8255 .8 set shape "Mcannon" ] ] if SFX [ sound:play-sound "spell.wav" ] ] end to a4857 a5450 if emergency_stop [ stop ] if count Veemons = 0 [ stop ] ifelse abs ycor > 32.4 or abs xcor > 27.4 [ die ] [ fd .4 a4857 ] a5450 end to a6894 if emergency_stop [ stop ] fd a8255 if abs ycor > 32.4 or abs xcor > 27.4 [ die ] end to a3956 if emergency_stop [ stop ] fd a8255 if abs ycor > 32.4 [ die ] if a1292 = 0 [ if xcor > 27.4 [ set heading heading + ( 2 * ( 180 - heading ) ) set a1292 1 fd 1 ] if xcor < -27.4 [ set heading heading + ( 2 * ( 180 - heading ) ) set a1292 1 fd 1 ] ] if a1292 = 1 [ if abs ycor > 32.4 or abs xcor > 27.4 [ die ] ] end to a6454 if emergency_stop [ stop ] fd a8255 if ycor < -32.4 [ die ] if a1292 = 0 [ if ycor > 32.4 [ set heading ( 180 - heading ) set a1292 1 fd 1 ] if abs xcor > 32.4 [ set heading heading + ( 2 * ( 180 - heading ) ) set a1292 1 fd 1 ] ] if a1292 = 2 [ if ycor > 32.4 [ set heading ( 180 - heading ) set a1292 1 fd 1 ] if abs xcor > 32.4 [ set heading heading + ( 2 * ( 180 - heading ) ) set a1292 0 fd 1 ] ] if a1292 = 1 [ if abs ycor > 32.4 or abs xcor > 32.4 [ die ] ] end to a1731 if emergency_stop [ stop ] fd a8255 if a1292 = 0 [ if abs ycor > 32.4 [ set heading ( 180 - heading ) set a1292 1 fd 1 ] if abs xcor > 32.4 [ set heading heading + ( 2 * ( 180 - heading ) ) set a1292 1 fd 1 ] ] if a1292 = 2 [ if abs ycor > 32.4 [ set heading ( 180 - heading ) set a1292 1 fd 1 ] if abs xcor > 32.4 [ set heading heading + ( 2 * ( 180 - heading ) ) set a1292 0 fd 1 ] ] if a1292 = 1 [ if abs ycor > 32.4 or abs xcor > 32.4 [ die ] ] end to a1376 if emergency_stop [ stop ] fd a8255 if ycor < -32.4 [ die ] if a1292 = 0 [ if ycor > 32.4 [ set heading ( 180 - heading ) set a1292 1 fd 1 ] ] if a1292 = 1 [ if abs ycor > 32.4 or abs xcor > 27.4 [ die ] ] end to a2728 if emergency_stop [ stop ] if a6102 > 0 [ fd a8255 ] if a1292 = 0 [ if abs xcor > 27.4 or abs ycor > 32.4 [ if heading mod 90 != 0 [ set a6102 -10 ] ] if xcor < -27.4 [ set heading 90 ] if xcor > 27.4 [ set heading 270 ] if ycor < -32.4 [ set heading 0 ] if ycor > 32.4 [ set heading 180 ] ] if a1292 = 1 [ if abs ycor > 32.4 or abs xcor > 27.4 [ die ] ] if a6102 < 0 [ set a6102 a6102 + 1 ] if a6102 = 0 [ set a1292 1 set a6102 1 ] end to a5223 if emergency_stop [ stop ] fd a8255 if count shots-here > 0 and shape != "cocade" [ ask shots-here [ die ] if SFX [ sound:play-sound "explode.wav" ] if shape = "peach" [ hatch-bulletXs random 12 + 5 [ set a6989 "speedexit" set a8255 random 4 / 10 + .1 set shape "bullet13" set heading random 361 set size 3 ] die ] if shape = "canister" [ hatch-bulletXs random 10 + 5 [ set a6989 "speedexit" set a8255 random 4 / 12 + .1 set shape "bullet13" set heading random 361 set size 3 ] die ] ] if count bulletIs with [ shape = "lavatein" ] in-radius 3 > 0 and shape = "cocade" [ hatch-bulletXs 5 [ set a6989 "speedexit" set a8255 .15 set shape "bullet13" set heading random 361 set size 3 set color white ] hatch-bulletXs 5 [ set a6989 "speedexit" set a8255 .2 set shape "bullet13" set heading random 361 set size 3 set color blue ] hatch-bulletXs 5 [ set a6989 "speedexit" set a8255 .25 set shape "bullet13" set heading random 361 set size 3 set color red ] if SFX [ sound:play-sound "explode.wav" ] die ] if abs ycor > 32.4 or abs xcor > 27.4 [ die ] end to a3921 if emergency_stop [ stop ] fd a8255 if a8255 < .4 and heading > 90 and heading < 270 [ set a8255 a8255 + ( a8255 / 100 ) ] if a8255 > .4 [ set a8255 .4 ] if heading < 180 [ set heading heading + ( ( 180 - heading ) / 72 ) ] if heading > 180 [ set heading heading - ( ( heading - 180 ) / 72 ) ] if heading = 0 [ set heading heading + .1 ] if abs ycor > 32.4 or abs xcor > 27.4 [ die ] end to a6047 if emergency_stop [ stop ] ask shots in-radius 3 [ die ] ask fshots in-radius 3 [ die ] end to a1578 ask bulletXs with [ shape != "bulletdie" ] [ set shape "bulletdie" ] ask bullets with [ shape != "bulletdie" ] [ set shape "bulletdie" ] ask lasers with [ shape != "bulletdie" ] [ set shape "bulletdie" ] wait .1 ask bulletXs with [ shape = "bulletdie" ] [ die ] ask bullets with [ shape = "bulletdie" ] [ die ] ask lasers with [ shape = "bulletdie" ] [ die ] wait .1 end to a5009 set a6989 "shield" a1578 set a5438 ( ( distance patch a4258 a9679 ) / 60 ) a6711 wait .01 if SFX [ sound:play-sound "spell.wav" ] set a6989 0 end to a6711 if emergency_stop [ stop ] if a4258 != xcor or a9679 != ycor [ face patch a4258 a9679 fd a5438 ] ask satori 1 [ hatch-bullets 1 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if int xcor = a4258 [ set xcor a4258 ] if int ycor = a9679 [ set ycor a9679 ] if int xcor != a4258 or int ycor != a9679 [ a6711 ] end to a3397 if emergency_stop [ stop ] if int xcor != a4258 or int a9679 != ycor [ face patch a4258 a9679 fd .25 ] if int xcor = a4258 and int ycor = a9679 [ setxy a4258 a9679 ] end to a7734 [ div ] set a5438 ( ( distance patch a4258 a9679 ) / div ) a6711 end to a5573 [ offset ] if emergency_stop [ stop ] if int heading != int a6292 and a6292 > heading [ set heading ( heading + offset ) ] if int heading != int a6292 and a6292 < heading [ set heading ( heading - offset ) ] if int heading = int a6292 [ set heading int heading ] end to a7274 [ num Bsize Bshape Bcolor spstat spd ] set a9609 heading repeat num [ hatch-bulletXs 1 [ set size Bsize set shape Bshape set color Bcolor set a6989 spstat set a8255 spd set heading a9609 ] set a9609 ( a9609 + ( 360 / num ) ) ] if SFX [ sound:play-sound "bullet.wav" ] end to a8168 [ num Bsize Bshape Bcolor spstat spd ] set a9609 heading repeat num [ hatch-lasers 1 [ set size Bsize set shape Bshape set color Bcolor set a6989 spstat set a8255 spd set heading a9609 ] set a9609 ( a9609 + ( 360 / num ) ) ] if SFX [ sound:play-sound "laser.wav" ] end to a9931 [ brd num Bsize Bshape Bcolor spstat spd dist ] set a9609 heading repeat num [ hatch 1 [ set breed brd set size Bsize set shape Bshape set color Bcolor set a6989 spstat set a8255 spd set heading a9609 fd dist ] set a9609 ( a9609 + ( 360 / num ) ) ] if SFX and brd = lasers [ sound:play-sound "laser.wav" ] if SFX and brd = bulletXs [ sound:play-sound "bullet.wav" ] if SFX and brd = shikigamis [ sound:play-sound "shiki.wav" ] if SFX and brd = bulletIs [ sound:play-sound "bullet.wav" ] end to a4544 [ numring num Bsize Bshape Bcolor spstat spd div ] a7274 num Bsize Bshape Bcolor spstat spd set numring numring - 1 if numring > 0 [ a4544 numring num Bsize Bshape Bcolor spstat ( spd / div ) div ] end to a8240 [ num offset Bsize Bshape Bcolor spstat spd ] set a9609 heading set a9609 ( a9609 + ( ( ( num - 1 ) * offset ) / 2 ) ) repeat num [ hatch-bulletXs 1 [ set size Bsize set shape Bshape set color Bcolor set a6989 spstat set a8255 spd set heading a9609 ] set a9609 a9609 - offset ] if SFX [ sound:play-sound "bullet.wav" ] end to a5343 [ num offset Bsize Bshape Bcolor spstat spd ] set a9609 heading set a9609 ( a9609 + ( ( ( num - 1 ) * offset ) / 2 ) ) repeat num [ hatch-lasers 1 [ set size Bsize set shape Bshape set color Bcolor set a6989 spstat set a8255 spd set heading a9609 ] set a9609 a9609 - offset ] if SFX [ sound:play-sound "laser.wav" ] end to a8716 [ brd num offset Bsize Bshape Bcolor spstat spd dist ] set a9609 heading set a9609 ( a9609 + ( ( ( num - 1 ) * offset ) / 2 ) ) repeat num [ hatch 1 [ set breed brd set size Bsize set shape Bshape set color Bcolor set a6989 spstat set a8255 spd set heading a9609 fd dist ] set a9609 a9609 - offset ] if SFX and brd = lasers [ sound:play-sound "laser.wav" ] if SFX and brd = bulletXs [ sound:play-sound "bullet.wav" ] if SFX and brd = shikigamis [ sound:play-sound "shiki.wav" ] if SFX and brd = bulletIs [ sound:play-sound "bullet.wav" ] end to a2313 [ numwave num offset Bsize Bshape Bcolor spstat spd div ] a8240 num offset Bsize Bshape Bcolor spstat spd set numwave numwave - 1 if numwave > 0 [ a2313 numwave num offset Bsize Bshape Bcolor spstat ( spd / div ) div ] end to a5512 [ num Bsize Bshape Bcolor spstat spd ] set a9609 0 carefully [ set a9609 heading ] [ ] repeat num [ hatch-bulletXs 1 [ set size Bsize set shape Bshape set color Bcolor set a6989 spstat set a8255 spd set heading a9609 ] set spd ( spd * .75 ) ] if SFX [ sound:play-sound "bullet.wav" ] end to a3854 [ num offset ] if round heading != a6292 and a6292 < heading [ set heading heading - ( ( abs ( a6292 - heading ) ) / num ) ] if round heading != a6292 and a6292 > heading [ set heading heading + ( ( abs ( heading - a6292 ) ) / num ) ] if ( abs ( heading - a6292 ) ) < 1 [ ifelse a6292 < heading [ set a6292 a6292 + offset ] [ set a6292 a6292 - offset ] ifelse a6292 < heading [ set heading heading - .5 ] [ set heading heading + .5 ] ] end to-report a4356 report [ a4048 ] of Veemon 0 end to-report a6911 report a4116 end to-report a5358 report a1853 end to-report a1900 report a8814 end to-report a7979 report ( count bulletXs + count lasers + count bulletIs ) end to-report a9483 ifelse a7316 > 0 [ report a7316 ] [ report 0 ] end to-report a6003 report a7281 end to a7851 ask Veemons [ set a4048 800000 ] end to a4902 if a8073 = 0 [ hatch-icons 1 [ set shape "point" set size 3 set heading 180 set a5679 "point" ] ] if a8073 = 7 [ hatch-icons 1 [ set shape "exticon" set size 3 set heading 180 set a5679 "extend" ] ] if a8073 = 1 [ hatch-icons 1 [ set shape "neutral" set size 5 set heading 180 set a5679 "Neutral" ] ] if a8073 = 2 [ hatch-icons 1 [ set shape "courage" set size 5 set heading 180 set a5679 "Courage" ] ] if a8073 = 3 [ hatch-icons 1 [ set shape "friendship" set size 5 set heading 180 set a5679 "Friendship" ] ] if a8073 = 4 [ hatch-icons 1 [ set shape "miracles" set size 5 set heading 180 set a5679 "Miracles" ] ] if a8073 = 8 [ hatch-icons 10 [ set shape "point" set size 3 set heading random 360 fd random 8 set heading 180 set a5679 "point" ] ] if a8073 = 9 [ hatch-icons 1 [ set shape "exticon" set size 3 set heading 180 set a5679 "extend" ] hatch-icons 10 [ set shape "point" set size 3 set heading random 360 fd random 8 set heading 180 set a5679 "point" ] ] end to a9096 a9697 output-print "Welcome to PokéDigi Danmaku!" output-print "Basically, you are Veemon." output-print "You have wandered into the Pokéworld!" output-print "Now, let's get started." wait 5 set a8444 20 output-print "The number in the top left is time." output-print "That shows time until an attack ends." output-print "In the top right is spell info." set a8444 1000 wait 5 clear-output a1476 create-bosses 1 [ set shape "Pichu" set color yellow set size 7 set a5440 "Pichu" set a4048 15000 setxy -10 32 set a4258 0 set a9679 20 a5009 set heading 180 ] clear-output ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] set a8444 2000 ask bosses [ a1463 ] output-print "Digimentals will appear during stages." output-print "Have fun playing!" end to a1476 if a8444 = 1000 [ output-print "You should be able to shoot now." output-print "Click the mouse to focus, and move." output-print "When time = 800, the next part starts." ] if a8444 = 800 [ output-print "Appearing on the screen is a Digimental." output-print "Collecting these will evolve Veemon." output-print "Your shots will change as well." ask patch 0 30 [ sprout-icons 1 [ set a5679 "Neutral" set shape "neutral" set size 5 set heading 180 ] ] wait 5 ] if a8444 = 600 [ output-print "Collecting two of the same Digimental..." output-print "...Releases an ExAttack!" output-print "Go and try it!" ask patch 0 30 [ sprout-icons 1 [ set a5679 "Neutral" set shape "neutral" set size 5 set heading 180 ] ] wait 5 clear-output ] if a8444 = 520 [ output-print "Each different evolution is unique." output-print "The evo-time monitor shows..." output-print "How much time you have until you revert." ask patch 0 30 [ sprout-icons 1 [ set a5679 "Courage" set shape "courage" set size 5 set heading 180 ] ] wait 5 ] if a8444 = 400 [ output-print "The objects appearing are point items." output-print "They will boost your score." output-print "Autocollect point items and extends." output-print "All you need to do is go past the POC." output-print "The POC is the line stated to the right." ask patches with [ pycor = 20 ] [ set pcolor green ] ask patch 0 20 [ sprout-shikigamis 1 [ set a8073 8 ] ] ] if a8444 < 400 and a8444 mod 10 = 0 [ ask shikigamis [ a4902 ] ] if a8444 = 300 [ ask shikigamis [ die ] ask icons [ die ] ask patches [ set pcolor black ] clear-output output-print "Now, here comes an enemy." output-print "The HP they have is shown on the screen." output-print "They will attack, so be careful!" output-print "Dodge and survive!" output-print "Grazing and hitting will increase score." output-print "Not dying during a spell..." output-print "...will award a bonus." output-print "But dying reverts you back to Veemon." output-print "Try beating it!" set a8444 0 wait 5 clear-output ] ask patch -24 32 [ set plabel a8444 ] ask satori 1 [ hatch-bullets 2 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ stop ] if a8444 > 0 [ set a8444 ( a8444 - 1 ) a1476 ] end to a7428 ask veemons [ set a4048 800000 ] ask patches with [ pycor = 25 and abs pxcor = 27 ] [ sprout-enemies 1 [ face patch 0 25 set shape "pichu" set size 5 set a8073 random 10 set a8255 .2 set a4048 20 ] ] if difficulty = "Easy" [ ask enemies [ a7274 3 3 "bullet8" ( one-of base-colors ) 0 .2 ] ] if difficulty = "Normal" [ ask enemies [ a7274 5 3 "bullet8" ( one-of base-colors ) 0 .2 ] ] if difficulty = "Hard" [ ask enemies [ a7274 8 3 "bullet8" ( one-of base-colors ) 0 .3 ] ] if difficulty = "Lunatic" [ ask enemies [ a7274 19 3 "bullet8" ( one-of base-colors ) 0 .35 ] ] ask satori 1 [ hatch-bullets 10 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ stop ] a7428 end to a1463 if count Veemons = 0 [ output-print "Game Over. You Lost to Pichu" stop ] if a8444 = 0 [ set a4048 0 ] ask patch -24 32 [ set plabel a8444 ] a8240 3 3 3 "bullet4" yellow 0 .2 set heading random 720 / 2 ask satori 1 [ hatch-bullets 5 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Pichu" ] ) > 0 [ set a8444 ( a8444 - 1 ) a1463 ] end to a5110 a9697 a3408 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] wait .5 ask Veemons [ set a9101 "Veemon" set shape "veemon" set a7281 0 ] a4197 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] ask Veemons [ set a9101 "Veemon" set shape "veemon" set a7281 0 ] end to a3408 if show-background? [ import-drawing "images//Stage 1.png" ] ask patches [ set pcolor green - 3 set a1327 pcolor ] output-print "Stage 1: The Vee Assualt Begins!" output-print "Welcome to Pichu Forest!" set a8444 520 a8290 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] a6606 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] set a8444 370 a8493 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] a4012 end to a8290 if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] ask patch -24 32 [ set plabel a8444 ] if a8444 <= 500 and a8444 >= 350 and a8444 mod 10 = 0 [ ask patch 27 20 [ sprout-enemies 1 [ set color green set a8255 .2 set size 5 set a4048 200 set shape "Pichu" set heading 270 ] ] ask patch -27 20 [ sprout-enemies 1 [ set color green set a8255 .2 set size 5 set a4048 200 set shape "Pichu" set heading 90 ] ] ] if Difficulty = "Easy" [ ask enemies with [ color = green ] [ if a8444 mod 9 = 0 and abs xcor < 20 [ hatch-bulletXs 1 [ set a8255 .1 face Veemon 0 set shape "bullet4" set color yellow set size 3 ] if SFX [ sound:play-sound "bullet.wav" ] ] ] ] if Difficulty = "Normal" [ ask enemies with [ color = green ] [ if a8444 mod 6 = 0 and abs xcor < 20 [ hatch-bulletXs 1 [ set a8255 .15 face Veemon 0 set shape "bullet4" set color yellow set size 3 ] if SFX [ sound:play-sound "bullet.wav" ] ] ] ] if Difficulty = "Hard" [ ask enemies with [ color = green ] [ if a8444 mod 3 = 0 and abs xcor < 20 [ hatch-bulletXs 1 [ set a8255 .25 face Veemon 0 set shape "bullet4" set color yellow set size 3 ] if SFX [ sound:play-sound "bullet.wav" ] ] ] ] if Difficulty = "Lunatic" [ ask enemies with [ color = green ] [ if a8444 mod 3 = 0 and abs xcor < 20 [ set a7812 heading face Veemon 0 a5512 5 3 "bullet4" yellow 0 .5 set heading a7812 ] ] ] if a8444 <= 400 and a8444 >= 200 and a8444 mod 40 = 0 [ ask patches with [ abs pxcor = 27 and pycor = 10 ] [ sprout-enemies 1 [ set size 5 set shape "pichu" set a4048 400 set a8255 .3 set color blue set a8073 one-of [ 2 3 ] face patch 0 10 ] ] ] ask enemies with [ color = blue ] [ if a8255 = .3 and abs xcor < 15 [ face Veemon 0 if difficulty = "Easy" [ a4544 2 5 3 "bullet4" yellow 0 .2 1.1 face patch 0 10 set a8255 .2 ] if difficulty = "Normal" [ a4544 4 6 3 "bullet4" yellow 0 .3 1.1 face patch 0 10 set a8255 .2 ] if difficulty = "Hard" [ a4544 6 8 3 "bullet4" yellow 0 .3 1.1 face patch 0 10 set a8255 .2 ] if difficulty = "Lunatic" [ a4544 6 12 3 "bullet4" yellow 0 .3 1.1 face patch 0 10 set a8255 .2 ] ] ] ask enemies with [ color = blue ] [ if a8255 = .2 and abs xcor < 10 [ set heading 0 set a8255 .07 if difficulty = "Easy" [ a7274 10 3 "bullet3" yellow 0 .2 ] if difficulty = "Normal" [ a7274 20 3 "bullet3" yellow 0 .2 ] if difficulty = "Hard" [ a7274 30 3 "bullet3" yellow 0 .2 ] if difficulty = "Lunatic" [ a7274 40 3 "bullet3" yellow 0 .22 ] ] if a8255 = .07 and ycor > 15 [ face veemon 0 if a8444 mod 5 = 0 [ a2313 2 3 20 3 "bullet4" yellow 0 .3 1.3 ] set heading 0 ] ] if a8444 >= 50 and a8444 <= 200 and a8444 mod 20 = 0 [ ask patches with [ pycor = 32 and pxcor mod 10 = 0 ] [ sprout-enemies 1 [ set color red set a8255 .25 set size 5 set shape "Pichu" set a4048 150 set heading 180 ] ] ] if a8444 >= 50 and a8444 <= 200 and a8444 mod 20 = 10 [ ask patches with [ pycor = 32 and pxcor mod 10 = 5 ] [ sprout-enemies 1 [ set color red set a8255 .25 set size 5 set shape "Pichu" set a4048 150 set heading 180 ] ] ] if a8444 mod 35 = 0 and difficulty = "Easy" [ ask enemies with [ color = red and ycor > 0 ] [ a8240 3 30 3 "bullet4" yellow 0 .12 set heading 0 a8240 3 30 3 "bullet4" yellow 0 .12 set heading 180 ] ] if a8444 mod 29 = 0 and difficulty = "Normal" [ ask enemies with [ color = red and ycor > -5 ] [ a8240 5 20 3 "bullet4" yellow 0 .16 set heading 0 a8240 5 20 3 "bullet4" yellow 0 .16 set heading 180 ] ] if a8444 mod 20 = 0 and difficulty = "Hard" [ ask enemies with [ color = red and ycor > -10 ] [ a8240 7 20 3 "bullet4" yellow 0 .18 set heading 0 a8240 7 20 3 "bullet4" yellow 0 .18 set heading 180 ] ] if a8444 mod 17 = 0 and difficulty = "Lunatic" [ ask enemies with [ color = red and ycor > -15 ] [ a8240 9 20 3 "bullet4" yellow 0 .18 set heading 0 a8240 9 20 3 "bullet4" yellow 0 .18 set heading 180 ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] if a8444 > 0 [ set a8444 ( a8444 - 1 ) a8290 ] end to a6606 if emergency_stop [ stop ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] create-bosses 1 [ set shape "Pichu" set color yellow set size 7 set a5440 "Pichu" set a4048 6000 setxy 0 32 set a4258 0 set a9679 20 a5009 set heading 180 set a8073 9 ] clear-output ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] ask bulletIs [ die ] ask enemies [ die ] set a8444 250 ask bosses with [ a5440 = "Pichu" ] [ a7458 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pichu" stop ] if emergency_stop [ stop ] clear-output carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask shikigamis [ die ] ask icons with [ shape = "bkgd" ] [ die ] ask patches [ set plabel "" ] end to a8493 if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] ask patch -24 32 [ set plabel a8444 ] if a8444 <= 350 and a8444 >= 200 and a8444 mod 40 = 0 [ ask patches with [ abs pxcor = 27 and pycor = 10 ] [ sprout-enemies 1 [ set size 5 set shape "pichu" set a4048 400 set a8255 .3 set color blue set a8073 one-of [ 2 3 ] face patch 0 10 ] ] ] ask enemies with [ color = blue ] [ if a8255 = .3 and abs xcor < 15 [ face Veemon 0 if difficulty = "Easy" [ a4544 2 7 3 "bullet4" yellow 0 .2 1.1 face patch 0 10 set a8255 .2 ] if difficulty = "Normal" [ a4544 4 6 3 "bullet4" yellow 0 .3 1.1 face patch 0 10 set a8255 .2 ] if difficulty = "Hard" [ a4544 6 9 3 "bullet4" yellow 0 .3 1.1 face patch 0 10 set a8255 .2 ] if difficulty = "Lunatic" [ a4544 7 15 3 "bullet4" yellow 0 .3 1.1 face patch 0 10 set a8255 .2 ] ] ] ask enemies with [ color = blue ] [ if a8255 = .2 and abs xcor < 10 [ set heading 0 set a8255 .07 if difficulty = "Easy" [ a7274 20 3 "bullet3" yellow 0 .2 ] if difficulty = "Normal" [ a7274 30 3 "bullet3" yellow 0 .2 ] if difficulty = "Hard" [ a7274 45 3 "bullet3" yellow 0 .2 ] if difficulty = "Lunatic" [ a7274 56 3 "bullet3" yellow 0 .2 ] ] if a8255 = .07 and ycor > 15 [ face veemon 0 if a8444 mod 5 = 0 [ a2313 2 3 24 3 "bullet4" yellow 0 .3 1.3 ] set heading 0 ] ] if a8444 >= 50 and a8444 <= 200 and a8444 mod 20 = 0 [ ask patches with [ pycor = 32 and pxcor mod 10 = 0 ] [ sprout-enemies 1 [ set color red set a8255 .2 set size 5 set shape "Pichu" set a4048 150 set heading 180 ] ] ] if a8444 >= 50 and a8444 <= 200 and a8444 mod 20 = 10 [ ask patches with [ pycor = 32 and pxcor mod 10 = 5 ] [ sprout-enemies 1 [ set color red set a8255 .2 set size 5 set shape "Pichu" set a4048 150 set heading 180 ] ] ] if a8444 mod 35 = 0 and difficulty = "Easy" [ ask enemies with [ color = red and ycor > 0 ] [ a8240 3 30 3 "bullet4" yellow 0 .12 set heading 0 a8240 3 30 3 "bullet4" yellow 0 .12 set heading 180 ] ] if a8444 mod 29 = 0 and difficulty = "Normal" [ ask enemies with [ color = red and ycor > -5 ] [ a8240 5 20 3 "bullet4" yellow 0 .16 set heading 0 a8240 5 20 3 "bullet4" yellow 0 .16 set heading 180 ] ] if a8444 mod 20 = 0 and difficulty = "Hard" [ ask enemies with [ color = red and ycor > -10 ] [ a8240 7 20 3 "bullet4" yellow 0 .18 set heading 0 a8240 7 20 3 "bullet4" yellow 0 .18 set heading 180 ] ] if a8444 mod 17 = 0 and difficulty = "Lunatic" [ ask enemies with [ color = red and ycor > -15 ] [ a8240 9 20 3 "bullet4" yellow 0 .18 set heading 0 a8240 9 20 3 "bullet4" yellow 0 .18 set heading 180 ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] if a8444 > 0 [ set a8444 ( a8444 - 1 ) a8493 ] end to a4012 if emergency_stop [ stop ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] if a9101 = "Lighdramon" or a9101 = "ExVeemon" [ ask Veemons [ set a9101 "Veemon" set shape "veemon" set a7281 0 ] ] ask patches [ set pcolor green - 3 set a1327 pcolor ] if show-background? [ import-drawing "images//pikachu.png" ] create-bosses 1 [ set shape "Pikachu" set color yellow set size 7 set a5440 "Pikachu" set a4048 25000 setxy -10 32 set a4258 0 set a9679 20 a5009 set heading 180 set a8073 7 ] cd if show-background? [ import-drawing "images//Stage 1.png" ] clear-output ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] ask shikigamis [ die ] ask bulletIs [ die ] ask enemies [ die ] set a8444 250 output-print "Vee: Commencing Raid!" output-print "Pikachu: I won't let you!" ask bosses with [ a5440 = "Pikachu" ] [ a2763 a1676 a2835 a3152 a6285 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if emergency_stop [ stop ] clear-output carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask shikigamis [ die ] ask icons with [ shape = "bkgd" ] [ die ] ask patches [ set plabel "" ] cd output-print "Stage Clear! +1500000" set a4116 a4116 + 1500000 end to a4197 if show-background? [ import-drawing "images//Stage 1.png" ] ask patches [ set pcolor green - 3 set a1327 pcolor ] output-print "Stage 2: The Vee Assualt Continues!" output-print "Welcome to the Forest of Time!" set a8444 520 a3672 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] a2222 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] set a8444 370 a2924 if emergency_stop [ stop ] clear-output ask patches [ set plabel "" ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] a6951 end to a3672 if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] ask patch -24 32 [ set plabel a8444 ] if a8444 = 500 [ ask patch -20 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] if a8444 = 495 [ ask patch -15 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] if a8444 = 490 [ ask patch -10 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] if a8444 = 485 [ ask patch -5 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] if a8444 = 480 [ ask patch 0 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] if a8444 = 475 [ ask patch 5 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] if a8444 = 470 [ ask patch 10 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] if a8444 = 465 [ ask patch 15 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 200 set a6102 30 ] ] ] ask enemies with [ color = yellow ] [ set a6102 a6102 - 1 if a6102 = 0 [ die ] set heading random 360 if a6102 mod 5 = 0 [ if difficulty = "Easy" [ a9931 bulletXs 8 3 "bullet3" yellow 0 .2 2 ] if difficulty = "Normal" [ a9931 bulletXs 10 3 "bullet3" yellow 0 .2 2 ] if difficulty = "Hard" [ a9931 bulletXs 12 7 "bullet2" yellow 0 .2 2 ] if difficulty = "Lunatic" [ a9931 bulletXs 8 3 "bullet3" yellow 0 .2 2 set heading random 360 a4544 2 7 7 "bullet2" yellow 0 .3 1.5 ] ] ] if a8444 mod 2 = 0 and a8444 < 470 and a8444 > 440 [ ask patch -27 30 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red set a4048 20 set heading 90 set a8255 .2 ] ] ] if a8444 mod 2 = 0 and a8444 < 450 and a8444 > 420 [ ask patch 27 10 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red set a4048 20 set heading 270 set a8255 .2 ] ] ] ask enemies with [ color = red ] [ set heading heading + 9 if difficulty = "Hard" or difficulty = "Lunatic" [ if random 5 = 0 [ hatch-bulletXs 1 [ set shape "bullet3" set size 3 set a8255 .35 set color yellow carefully [ face Veemon 0 ] [ ] ] ] ] ] if a8444 mod 2 = 0 and a8444 < 430 and a8444 > 400 [ ask patch -27 30 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red + 1 set a4048 20 set heading 90 set a8255 .2 ] ] ] if a8444 mod 2 = 0 and a8444 < 410 and a8444 > 380 [ ask patch 27 10 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red + 1 set a4048 20 set heading 270 set a8255 .2 ] ] ] ask enemies with [ color = red + 1 ] [ set heading heading + 3 if random 5 = 0 [ hatch-bulletXs 1 [ set shape "bullet3" set size 3 set a8255 .35 set color yellow carefully [ face Veemon 0 ] [ ] ] ] ] if a8444 = 370 [ ask patches with [ pycor = 15 and abs pxcor = 17 ] [ sprout-shikigamis 1 [ set heading 180 set a4048 1000 a9931 enemies 2 5 "Pichu" orange 0 0 5 die ] ] ] ask enemies with [ color = orange ] [ rt 7.4 set a8073 2 if difficulty = "Easy" [ hatch-bulletXs 1 [ set size 3 set shape "bullet3" set a8255 .2 ] ] if a8444 mod 2 = 0 [ if difficulty = "Normal" [ a7274 3 3 "bullet3" red 0 .2 ] if difficulty = "Hard" [ a7274 4 3 "bullet3" red 0 .2 ] if difficulty = "Lunatic" [ a7274 5 3 "bullet3" red 0 .2 ] ] ] if a8444 = 300 [ ask enemies with [ color = orange ] [ die ] ] if a8444 mod 2 = 0 and a8444 < 340 and a8444 > 310 [ ask patch -27 30 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red set a4048 20 set heading 90 set a8255 .2 ] ] ] if a8444 mod 2 = 0 and a8444 < 320 and a8444 > 290 [ ask patch 27 10 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red set a4048 20 set heading 270 set a8255 .2 ] ] ] if a8444 mod 2 = 0 and a8444 < 300 and a8444 > 290 [ ask patch 27 25 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color blue set a4048 150 set heading 270 set a8255 .5 set a6102 random 9 + 4 ] ] ] if a8444 mod 2 = 0 and a8444 < 295 and a8444 > 285 [ ask patch -27 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color blue set a4048 150 set heading 90 set a8255 .5 set a6102 random 7 + 4 ] ] ] if a8444 mod 2 = 0 and a8444 < 290 and a8444 > 280 [ ask patch 27 15 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color blue set a4048 150 set heading 270 set a8255 .5 set a6102 random 5 + 4 ] ] ] ask enemies with [ color = blue ] [ set a6102 a6102 - 1 if a6102 = 0 [ set heading 0 set a8255 .1 ] if heading = 0 [ if difficulty = "Easy" [ a7274 6 3 "bullet5" yellow 0 .5 ] if difficulty = "Normal" [ a7274 8 3 "bullet5" yellow 0 .5 ] if difficulty = "Hard" [ a7274 10 3 "bullet5" yellow 0 .5 ] if difficulty = "Lunatic" [ a7274 12 3 "bullet5" yellow 0 .5 ] ] ] if a8444 = 250 [ ask patch 0 32 [ sprout-enemies 1 [ set a4258 0 set a9679 20 set size 5 set shape "Pichu" set color green set heading 180 set a8073 1 set a6102 85 set a4048 2000 ] ] ] if a8444 = 235 [ ask enemies with [ color = green ] [ a9931 shikigamis 8 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] ] ask enemies with [ color = green ] [ ifelse a6102 > 0 [ a3397 set a6102 a6102 - 1 ] [ set heading 0 set a8255 .4 ] set heading a7812 if difficulty = "Easy" and a8444 mod 3 = 0 [ ask shikigamis [ a7274 2 3 "bullet3" lime 0 .2 ] ] if difficulty = "Normal" and a8444 mod 3 = 0 [ ask shikigamis [ a7274 3 3 "bullet3" lime 0 .2 ] ] if difficulty = "Hard" and a8444 mod 3 = 0 [ ask shikigamis [ a7274 5 3 "bullet3" lime 0 .2 ] ] if difficulty = "Lunatic" and a8444 mod 4 = 0 [ ask shikigamis [ a4544 2 6 3 "bullet3" lime 0 .2 1.3 ] ] rt 3.9 set a7812 heading if a6102 <= 0 [ set heading 0 ] ] if count enemies with [ color = green ] = 0 [ ask shikigamis with [ color = lime ] [ die ] ] if a8444 = 150 [ ask patch 0 32 [ sprout-enemies 1 [ set a4258 0 set a9679 20 set size 5 set shape "Pichu" set color green set heading 180 set a8073 9 set a6102 85 set a4048 2000 ] ] ] if a8444 = 135 [ ask enemies with [ color = green ] [ a9931 shikigamis 8 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] ] if a8444 = 80 and count enemies = 0 [ ask patch 0 32 [ sprout-enemies 1 [ set a4258 0 set a9679 20 set size 5 set shape "Pichu" set color green set heading 180 set a8073 9 set a6102 50 set a4048 2000 ] ] ] if a8444 = 65 [ ask enemies with [ color = green ] [ a9931 shikigamis 8 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] if a8444 > 30 [ set a8444 ( a8444 - 1 ) a3672 ] end to a2222 if emergency_stop [ stop ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] if a9101 = "Lighdramon" or a9101 = "ExVeemon" [ ask Veemons [ set a9101 "Veemon" set shape "veemon" set a7281 0 ] ] create-bosses 1 [ set shape "celebi" set color green + 3 set size 7 set a5440 "Celebi" set a4048 8000 setxy 0 32 set a4258 0 set a9679 20 a5009 set heading 180 set a8073 9 ] clear-output ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] ask shikigamis [ die ] ask bulletIs [ die ] ask enemies [ die ] set a8444 250 ask bosses with [ a5440 = "Celebi" ] [ a1614 a6839 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pichu" stop ] if emergency_stop [ stop ] clear-output carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask shikigamis [ die ] ask icons with [ shape = "bkgd" ] [ die ] ask patches [ set plabel "" ] end to a2924 if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] ask patch -24 32 [ set plabel a8444 ] if a8444 = 350 [ ask patches with [ pycor = 15 and abs pxcor = 17 ] [ sprout-shikigamis 1 [ set heading 180 set a4048 1000 a9931 enemies 2 5 "Pichu" orange 0 0 5 die ] ] ] ask enemies with [ color = orange ] [ rt 7.4 set a8073 1 if difficulty = "Easy" [ hatch-bulletXs 1 [ set size 3 set shape "bullet3" set a8255 .2 ] ] if a8444 mod 2 = 0 [ if difficulty = "Normal" [ a7274 4 3 "bullet3" red 0 .2 ] if difficulty = "Hard" [ a7274 6 3 "bullet3" red 0 .2 ] if difficulty = "Lunatic" [ a7274 8 3 "bullet3" red 0 .2 ] ] ] if a8444 = 300 [ ask enemies with [ color = orange ] [ die ] ] if a8444 mod 2 = 0 and a8444 < 340 and a8444 > 310 [ ask patch -27 30 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red set a4048 20 set heading 90 set a8255 .2 ] ] ] if a8444 mod 2 = 0 and a8444 < 320 and a8444 > 290 [ ask patch 27 10 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color red set a4048 20 set heading 270 set a8255 .2 ] ] ] if a8444 mod 2 = 0 and a8444 < 300 and a8444 > 290 [ ask patch 27 25 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 150 set heading 270 set a8255 .5 set a6102 10 ] ] ] if a8444 mod 2 = 0 and a8444 < 295 and a8444 > 285 [ ask patch -27 20 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color yellow set a4048 150 set heading 90 set a8255 .5 set a6102 10 ] ] ] if a8444 mod 2 = 0 and a8444 < 290 and a8444 > 280 [ ask patch 27 15 [ sprout-enemies 1 [ set size 5 set shape "Pichu" set color blue set a4048 150 set heading 270 set a8255 .5 set a6102 random 9 + 4 ] ] ] ask enemies with [ color = red ] [ set heading heading + 9 if difficulty = "Hard" or difficulty = "Lunatic" [ if random 5 = 0 [ hatch-bulletXs 1 [ set shape "bullet3" set size 3 set a8255 .35 set color yellow carefully [ face Veemon 0 ] [ ] ] ] ] ] ask enemies with [ color = yellow ] [ if a8444 mod 2 = 0 [ set a7812 heading face Veemon 0 if difficulty = "Easy" or difficulty = "Normal" [ a8240 3 2 3 "bullet3" yellow 0 .4 ] if difficulty = "Hard" or difficulty = "Lunatic" [ a8240 7 1 3 "bullet3" yellow 0 .4 ] set heading a7812 ] ] ask enemies with [ color = blue ] [ set a6102 a6102 - 1 if a6102 = 0 [ set heading 0 set a8255 .1 ] if heading = 0 [ if difficulty = "Easy" [ a7274 6 3 "bullet5" yellow 0 .5 ] if difficulty = "Normal" [ a7274 8 3 "bullet5" yellow 0 .5 ] if difficulty = "Hard" [ a7274 10 3 "bullet5" yellow 0 .5 ] if difficulty = "Lunatic" [ a7274 12 3 "bullet5" yellow 0 .5 ] ] ] if a8444 = 250 [ ask patch 0 32 [ sprout-enemies 1 [ set a4258 0 set a9679 20 set size 5 set shape "Pichu" set color green set heading 180 set a8073 9 set a6102 70 set a4048 2000 ] ] ] if a8444 = 235 [ ask enemies with [ color = green ] [ a9931 shikigamis 8 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] ] ask enemies with [ color = green ] [ ifelse a6102 > 0 [ a3397 set a6102 a6102 - 1 ] [ set heading 0 set a8255 .4 ] set heading a7812 if difficulty = "Easy" and a8444 mod 3 = 0 [ ask shikigamis [ a7274 2 3 "bullet3" lime 0 .2 ] ] if difficulty = "Normal" and a8444 mod 3 = 0 [ ask shikigamis [ a7274 3 3 "bullet3" lime 0 .2 ] ] if difficulty = "Hard" and a8444 mod 3 = 0 [ ask shikigamis [ a7274 5 3 "bullet3" lime 0 .2 ] ] if difficulty = "Lunatic" and a8444 mod 4 = 0 [ ask shikigamis [ a4544 2 6 3 "bullet3" lime 0 .2 1.3 ] ] rt 3.9 set a7812 heading if a6102 <= 0 [ set heading 0 ] ] if count enemies with [ color = green ] = 0 [ ask shikigamis with [ color = lime ] [ die ] ] if a8444 = 150 [ ask patch 0 32 [ sprout-enemies 1 [ set a4258 0 set a9679 20 set size 5 set shape "Pichu" set color green set heading 180 set a8073 9 set a6102 70 set a4048 2000 ] ] ] if a8444 = 135 [ ask enemies with [ color = green ] [ a9931 shikigamis 9 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] ] if a8444 = 70 [ ask patch 0 32 [ sprout-enemies 1 [ set a4258 0 set a9679 20 set size 5 set shape "Pichu" set color green set heading 180 set a8073 9 set a6102 60 set a4048 1800 ] ] ] if a8444 = 55 [ ask enemies with [ color = green ] [ a9931 shikigamis 9 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] if a8444 > 0 [ set a8444 ( a8444 - 1 ) a2924 ] end to a6951 if emergency_stop [ stop ] if count Veemons = 0 [ output-print "Game Over. You Lose" stop ] if a9101 = "Lighdramon" or a9101 = "ExVeemon" [ ask Veemons [ set a9101 "Veemon" set shape "veemon" set a7281 0 ] ] ask patches [ set pcolor green - 3 set a1327 pcolor ] if show-background? [ import-drawing "images//celebi.png" ] create-bosses 1 [ set shape "Celebi" set color green + 3 set size 7 set a5440 "Celebi" set a4048 30000 setxy -10 32 set a4258 0 set a9679 20 a5009 set heading 180 set a8073 7 ] cd if show-background? [ import-drawing "images//Stage 1.png" ] clear-output ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] ask shikigamis [ die ] ask bulletIs [ die ] ask enemies [ die ] set a8444 250 output-print "Vee: This is an interesting forest." output-print "Celebi: Time flows through here." output-print "Celebi: But what are you?" output-print "Celebi: Not a Pokémon." output-print "Celebi: Anyway, you are a tresspasser." output-print "Celebi: With the best of my ability..." output-print "Celebi: I must remove you!" output-print "Vee: I'm all ready for a fight!" ask bosses with [ a5440 = "Celebi" ] [ a7889 a6916 a3345 a2785 a2885 a9789 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if emergency_stop [ stop ] clear-output carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask shikigamis [ die ] ask icons with [ shape = "bkgd" ] [ die ] ask patches [ set plabel "" ] cd output-print "Stage Clear! +2500000" set a4116 a4116 + 2500000 end to a7458 if count Veemons = 0 [ output-print "Game Over. You Lost to Pichu" stop ] if a8444 = 0 [ set a4048 0 ] ask patch -24 32 [ set plabel a8444 ] if difficulty = "Easy" [ if a8444 mod 5 = 0 [ face Veemon 0 a7274 10 3 "bullet4" yellow 0 .2 ] ] if difficulty = "Normal" [ if a8444 mod 4 = 0 [ face Veemon 0 a7274 14 3 "bullet4" yellow 0 .22 ] ] if difficulty = "Hard" [ if a8444 mod 2 = 0 [ face Veemon 0 a7274 30 3 "bullet4" yellow 0 .32 ] ] if difficulty = "Lunatic" [ if a8444 mod 2 = 0 [ face Veemon 0 a7274 70 3 "bullet4" yellow 0 .4 ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pichu." stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Pichu" ] ) > 0 [ set a8444 ( a8444 - 1 ) a7458 ] end to a2763 if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if a8444 = 0 [ set a4048 19999 ] ask patch -24 32 [ set plabel a8444 ] if difficulty = "Easy" [ set heading random 720 / 2 a8240 3 3 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 5 3 3 "bullet4" yellow 0 .3 ] if difficulty = "Normal" [ set heading random 720 / 2 a8240 5 3 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 7 3 3 "bullet4" yellow 0 .3 ] if difficulty = "Hard" [ set heading random 720 / 2 a8240 7 3 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 9 3 3 "bullet4" yellow 0 .3 ] if difficulty = "Lunatic" [ set heading random 720 / 2 a8240 13 3 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 15 3 3 "bullet4" yellow 0 .3 ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu." stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Pikachu" ] ) > 19999 [ set a8444 ( a8444 - 1 ) a2763 ] end to a1676 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if emergency_stop [ stop ] output-print "Sparkle: Thundershock" ask patch 27 32 [ set plabel "[Sparkle] Thundershock" ] set a4258 0 set a9679 20 a5009 set a6102 400 hatch-icons 1 [ set size 20 set shape "bkgd" ] set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a3569 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask icons with [ shape = "bkgd" ] [ die ] clear-output ask patches with [ pycor > 25 ] [ set plabel "" ] set a8444 300 hatch-icons 1 [ set shape "courage" set size 5 set heading 180 set a5679 "Courage" ] set a8073 8 a4902 set a8073 7 end to a3569 if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if a6102 = 0 [ set a1862 0 set a4048 14999 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] ] if difficulty = "Easy" [ if a6102 mod 12 = 8 [ a7274 16 3 "bullet4" color 0 .3 ] if a6102 mod 12 = 4 [ a7274 19 3 "bullet3" color 0 .18 ] if a6102 mod 12 = 0 [ face Veemon 0 ] hatch-bulletXs 1 [ set size 3 set shape "bullet3" set color yellow + 2 set a8255 .23 ] ] if difficulty = "Normal" [ if a6102 mod 12 = 8 [ a7274 26 3 "bullet4" color 0 .3 ] if a6102 mod 12 = 4 [ a7274 31 3 "bullet3" color 0 .18 ] if a6102 mod 12 = 0 [ face Veemon 0 ] hatch-bulletXs 1 [ set size 3 set shape "bullet3" set color yellow + 2 set a8255 .23 ] ] if difficulty = "Hard" [ if a6102 mod 12 = 8 [ a7274 44 3 "bullet4" color 0 .3 ] if a6102 mod 12 = 4 [ a7274 35 3 "bullet3" color 0 .18 ] if a6102 mod 12 = 0 [ face Veemon 0 ] hatch-bulletXs 1 [ set size 3 set shape "bullet3" set color yellow + 2 set a8255 .23 ] ] if difficulty = "Lunatic" [ if a6102 mod 12 = 8 [ a7274 64 3 "bullet4" color 0 .3 ] if a6102 mod 12 = 4 [ a7274 45 3 "bullet3" color 0 .18 ] if a6102 mod 12 = 0 [ face Veemon 0 ] hatch-bulletXs 1 [ set size 3 set shape "bullet3" set color yellow + 2 set a8255 .23 ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Pikachu" ] ) > 14999 [ set a6102 ( a6102 - 1 ) a3569 ] end to a2835 if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if a8444 = 0 [ set a4048 9999 ] ask patch -24 32 [ set plabel a8444 ] if difficulty = "Easy" [ set heading random 720 / 2 a8240 5 6 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 7 4 3 "bullet4" yellow 0 .3 ] if difficulty = "Normal" [ set heading random 720 / 2 a8240 8 6 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 7 4 3 "bullet4" yellow 0 .3 ] if difficulty = "Hard" [ set heading random 720 / 2 a8240 12 6 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 9 4 3 "bullet4" yellow 0 .3 ] if difficulty = "Lunatic" [ set heading random 720 / 2 a8240 16 6 3 "bullet4" yellow 0 .2 set heading random 720 / 2 a8240 13 4 3 "bullet4" yellow 0 .3 ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu." stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Pikachu" ] ) > 9999 [ set a8444 ( a8444 - 1 ) a2835 ] end to a3152 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if emergency_stop [ stop ] output-print "Thunder Sign: Spiral Thunder Blast" ask patch 27 32 [ set plabel "[Thunder Sign] Spiral Thunder Blast" ] set a4258 0 set a9679 10 a5009 set a6102 200 hatch-icons 1 [ set size 20 set shape "bkgd" ] set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a7935 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] ask shikigamis [ die ] clear-output set a8073 8 a4902 set a8073 7 end to a7935 if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if a6102 = 0 [ set a1862 0 set a4048 4999 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] ] set heading random 720 / 2 if difficulty = "Easy" and a6102 mod 5 = 0 [ a7274 24 3 "bullet4" yellow 0 .2 ] if difficulty = "Normal" and a6102 mod 4 = 0 [ a7274 36 3 "bullet4" yellow 0 .2 ] if difficulty = "Hard" and a6102 mod 3 = 0 [ a7274 48 3 "bullet4" yellow 0 .2 ] if difficulty = "Lunatic" and a6102 mod 3 = 0 [ a7274 60 3 "bullet4" yellow 0 .2 ] if difficulty = "Easy" and a6102 mod 5 = 0 [ a7274 24 3 "bullet3" yellow 0 .2 ] if difficulty = "Normal" and a6102 mod 4 = 0 [ a7274 36 3 "bullet3" yellow 0 .2 ] if difficulty = "Hard" and a6102 mod 3 = 0 [ a7274 48 3 "bullet3" yellow 0 .2 ] if difficulty = "Lunatic" and a6102 mod 3 = 0 [ a7274 60 3 "bullet3" yellow 0 .2 ] ask bulletXs with [ shape = "bullet4" ] [ set heading heading + 4 ] ask bulletXs with [ shape = "bullet3" ] [ set heading heading - 4 ] ask satori 1 [ hatch-bullets 5 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Pikachu" ] ) > 4999 [ set a6102 ( a6102 - 1 ) a7935 ] end to a6285 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if emergency_stop [ stop ] output-print "Thunderbolt: Electrical Storm Blaze" ask patch 27 32 [ set plabel "[Thunderbolt] Electrical Storm Blaze" ] set a4258 0 set a9679 23 a5009 set a6102 350 hatch-icons 1 [ set size 20 set shape "bkgd" ] set heading 180 set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a2959 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] clear-output ask shikigamis [ die ] end to a2959 if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if a6102 = 0 [ set a1862 0 set a4048 0 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] ] set heading heading + 5 if a6102 mod 20 = 0 [ face Veemon 0 ] if difficulty = "Easy" [ a7274 8 3 "bullet3" yellow 0 .2 if a6102 mod 10 = 0 [ a8168 5 5 "laser2" yellow 0 .35 ] ] if difficulty = "Normal" [ a7274 14 3 "bullet3" yellow 0 .2 if a6102 mod 10 = 0 [ a8168 9 5 "laser2" yellow 0 .35 ] ] if difficulty = "Hard" [ a4544 2 14 3 "bullet3" yellow 0 .2 1.5 if a6102 mod 10 = 0 [ a8168 15 5 "laser2" yellow 0 .35 ] ] if difficulty = "Lunatic" [ a4544 2 18 3 "bullet3" yellow 0 .2 1.5 if a6102 mod 10 = 0 [ a8168 19 5 "laser2" yellow 0 .35 ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Pikachu" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Pikachu" ] ) > 0 [ set a6102 ( a6102 - 1 ) a2959 ] end to a1614 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a8444 = 0 [ set a4048 4999 ] ask patch -24 32 [ set plabel a8444 ] if a8444 mod 3 = 0 [ face Veemon 0 hatch-shikigamis 1 [ set size 5 set shape "bkgd" set a8255 .3 set a6102 5 ] ] if a8444 mod 3 = 0 and difficulty != "Easy" [ set heading random 120 + 120 hatch-shikigamis 1 [ set size 5 set shape "bkgd" set a8255 .3 set a6102 5 ] ] ask shikigamis [ set a6102 a6102 - 1 ] ask shikigamis with [ a6102 = 0 ] [ if difficulty = "Easy" [ a7274 8 3 "bullet4" lime 0 .2 ] if difficulty = "Normal" [ a7274 16 3 "bullet4" lime 0 .2 ] if difficulty = "Hard" [ a7274 20 3 "bullet4" lime 0 .22 ] if difficulty = "Lunatic" [ a7274 26 7 "bullet2" lime 0 .24 ] die ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi." stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 4999 [ set a8444 ( a8444 - 1 ) a1614 ] end to a6839 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if emergency_stop [ stop ] ifelse difficulty = "Easy" or difficulty = "Normal" [ output-print "Spring of Life: Leaves in the Bright Sky" ask patch 27 32 [ set plabel "[Spring of Life] Leaves in the Bright Sky" ] ] [ output-print "Spring of Time: Withering Leaves of Time" ask patch 27 32 [ set plabel "[Spring of Time] Withering Leaves of Time" ] ] ask shikigamis [ die ] set a4258 0 set a9679 20 a5009 set a6102 300 hatch-icons 1 [ set size 20 set shape "bkgd" ] set heading 180 if difficulty = "Easy" [ a9931 shikigamis 12 5 "bkgd" lime 0 0 5 ] if difficulty = "Normal" [ a9931 shikigamis 15 5 "bkgd" lime 0 0 5 ] if difficulty = "Hard" [ a9931 shikigamis 6 5 "bkgd" lime 0 0 5 a9931 shikigamis 9 5 "bkgd" green 0 0 10 ] if difficulty = "Lunatic" [ a9931 shikigamis 9 5 "bkgd" lime 0 0 5 a9931 shikigamis 12 5 "bkgd" green 0 0 10 ] create-links-to shikigamis [ tie ] ask links [ set hidden? true ] set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a1049 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] clear-output ask shikigamis [ die ] end to a1049 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a6102 = 0 [ set a1862 0 set a4048 0 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] set xcor [ xcor ] of one-of bosses set ycor [ ycor ] of one-of bosses ] if a6102 mod 50 = 0 [ set a4258 random 30 - 15 set a9679 random 20 + 5 ] a3397 set heading a7812 if difficulty = "Easy" [ if a6102 mod 3 = 0 [ ask shikigamis with [ color = lime ] [ a7274 3 3 "bullet3" color 0 .2 ] ] ] if difficulty = "Normal" [ if a6102 mod 3 = 0 [ ask shikigamis with [ color = lime ] [ a7274 4 3 "bullet3" color 0 .2 ] ] ] if difficulty = "Hard" [ if a6102 mod 3 = 0 [ ask shikigamis with [ color = lime ] [ a7274 5 3 "bullet3" color 0 .2 ] ] ] if difficulty = "Lunatic" [ if a6102 mod 3 = 0 [ ask shikigamis with [ color = lime ] [ a7274 6 3 "bullet3" color 0 .2 ] ] ] if difficulty = "Hard" [ if a6102 mod 3 = 2 [ ask shikigamis with [ color = green ] [ a7274 4 3 "bullet3" color 0 .2 ] ] ] if difficulty = "Lunatic" [ if a6102 mod 3 = 2 [ ask shikigamis with [ color = green ] [ a7274 5 3 "bullet3" color 0 .2 ] ] ] set heading heading + 5.9 set a7812 heading ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 0 [ set a6102 ( a6102 - 1 ) a1049 ] end to a7889 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a8444 = 0 [ set a4048 24999 ] ask patch -24 32 [ set plabel a8444 ] if count shikigamis = 0 and difficulty = "Easy" [ a9931 shikigamis 4 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] if count shikigamis = 0 and difficulty = "Normal" [ a9931 shikigamis 6 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] if count shikigamis = 0 and difficulty = "Hard" [ a9931 shikigamis 8 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] if count shikigamis = 0 and difficulty = "Lunatic" [ a9931 shikigamis 10 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] set heading heading + 9.3 if difficulty = "Easy" or difficulty = "Normal" [ ask shikigamis [ a7274 2 3 "bullet3" lime 0 .2 ] ] if difficulty = "Hard" or difficulty = "Lunatic" [ ask shikigamis [ a7274 4 3 "bullet3" lime 0 .2 ] ] if a8444 mod 10 = 0 [ a7274 10 7 "bullet2" color 0 .35 ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi." stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 24999 [ set a8444 ( a8444 - 1 ) a7889 ] end to a6916 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if emergency_stop [ stop ] output-print "Leaf Sign" output-print "Rings of Leaves, Bubbles of Time" ask patch 27 32 [ set plabel "[Leaf Sign] Rings of Leaves, Bubbles of Time" ] ask shikigamis [ die ] set a4258 0 set a9679 18 a5009 ask shikigamis [ die ] set a6102 300 hatch-icons 1 [ set size 20 set shape "bkgd" ] set heading 180 ask shikigamis [ die ] if difficulty = "Easy" [ a9931 shikigamis 8 5 "bkgd" lime 0 0 5 ] if difficulty = "Normal" [ a9931 shikigamis 12 5 "bkgd" lime 0 0 5 ] if difficulty = "Hard" [ a9931 shikigamis 8 5 "bkgd" lime 0 0 10 a9931 shikigamis 4 5 "bkgd" lime 0 0 5 ] if difficulty = "Lunatic" [ a9931 shikigamis 10 5 "bkgd" lime 0 0 10 a9931 shikigamis 6 5 "bkgd" lime 0 0 5 ] set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a9531 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 set a8444 250 ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] clear-output ask shikigamis [ die ] clear-output set a8073 8 a4902 set a8073 7 end to a9531 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a6102 = 0 [ set a1862 0 set a4048 19999 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] set xcor [ xcor ] of one-of bosses set ycor [ ycor ] of one-of bosses ] face veemon 0 if a6102 mod 2 = 0 [ ask shikigamis [ set heading [ heading ] of one-of bosses ] ] if a6102 mod 4 = 0 [ if difficulty = "Easy" [ ask shikigamis [ a7274 2 3 "bullet3" lime 0 .2 ] ] if difficulty = "Normal" [ ask shikigamis [ a7274 3 3 "bullet3" lime 0 .2 ] ] if difficulty = "Hard" [ ask shikigamis [ a7274 5 3 "bullet3" lime 0 .2 ] ] if difficulty = "Lunatic" [ ask shikigamis [ a7274 6 3 "bullet3" lime 0 .2 ] ] ] if a6102 mod 4 = 2 [ a7274 20 7 "bullet2" color 0 .3 ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 19999 [ set a6102 ( a6102 - 1 ) a9531 ] end to a3345 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a8444 = 0 [ set a4048 14999 ] ask patch -24 32 [ set plabel a8444 ] if count shikigamis = 0 and difficulty = "Easy" [ a9931 shikigamis 3 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] if count shikigamis = 0 and difficulty = "Normal" [ a9931 shikigamis 4 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] if count shikigamis = 0 and difficulty = "Hard" [ a9931 shikigamis 5 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] if count shikigamis = 0 and difficulty = "Lunatic" [ a9931 shikigamis 6 5 "bkgd" lime 0 0 5 create-links-to shikigamis [ tie ] ask links [ set hidden? true ] ] set heading heading + 9.3 if difficulty = "Easy" or difficulty = "Normal" [ ask shikigamis [ a7274 3 3 "bullet3" lime 0 .2 ] ] if difficulty = "Hard" or difficulty = "Lunatic" [ ask shikigamis [ a4544 2 3 3 "bullet3" lime 0 .2 1.2 ] ] if a8444 mod 6 = 0 [ a7274 15 7 "bullet2" color 0 .35 ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi." stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 14999 [ set a8444 ( a8444 - 1 ) a3345 ] end to a2785 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if emergency_stop [ stop ] output-print "Leaf Shower: Gently Falling Leaves" ask patch 27 32 [ set plabel "[Leaf Shower] Gently Falling Leaves" ] ask shikigamis [ die ] set a4258 0 set a9679 17 a5009 set a6102 300 hatch-icons 1 [ set size 20 set shape "bkgd" ] set heading 180 if difficulty = "Easy" or difficulty = "Normal" [ a9931 shikigamis 3 5 "bkgd" lime 0 0 8 ] if difficulty = "Hard" or difficulty = "Lunatic" [ a9931 shikigamis 4 5 "bkgd" lime 0 0 8 ] create-links-to shikigamis [ tie ] ask links [ set hidden? true ] set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a2898 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] clear-output ask shikigamis [ die ] end to a2898 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a6102 = 0 [ set a1862 0 set a4048 9999 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] set xcor [ xcor ] of one-of bosses set ycor [ ycor ] of one-of bosses ] if a6102 mod 5 = 0 [ if difficulty = "Easy" [ ask shikigamis [ a2313 2 8 15 3 "bullet3" color 0 .2 1.5 ] ] if difficulty = "Normal" [ ask shikigamis [ a2313 2 10 15 3 "bullet3" color 0 .2 1.5 ] ] if difficulty = "Hard" [ ask shikigamis [ a2313 3 9 15 3 "bullet3" color 0 .2 1.5 ] ] if difficulty = "Lunatic" [ ask shikigamis [ a2313 3 10 15 3 "bullet3" color 0 .2 1.5 ] ] ] if a6102 mod 25 = 0 and difficulty = "Easy" [ set a7812 heading face Veemon 0 set heading heading - 20 repeat 5 [ a5512 3 3 "bullet3" color 0 .4 set heading heading + 10 ] set heading a7812 ] if a6102 mod 25 = 0 and difficulty = "Normal" [ set a7812 heading face Veemon 0 set heading heading - 20 repeat 7 [ a5512 4 3 "bullet3" color 0 .4 set heading heading + 6.66 ] set heading a7812 ] if a6102 mod 25 = 0 and difficulty = "Hard" [ set a7812 heading face Veemon 0 set heading heading - 20 repeat 9 [ a5512 5 3 "bullet3" color 0 .5 set heading heading + 5 ] set heading a7812 ] if a6102 mod 25 = 0 and difficulty = "Lunatic" [ set a7812 heading face Veemon 0 set heading heading - 20 repeat 9 [ a5512 6 3 "bullet3" color 0 .5 set heading heading + 5 ] set heading a7812 ] set heading heading + 5.7 ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 9999 [ set a6102 ( a6102 - 1 ) a2898 ] end to a2885 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if emergency_stop [ stop ] output-print "Leaf Sign: Psychic Leaves of Time" ask patch 27 32 [ set plabel "[Leaf Sign] Psychic Leaves of Time" ] ask shikigamis [ die ] set a4258 0 set a9679 21 a5009 set a6102 300 hatch-icons 1 [ set size 20 set shape "bkgd" ] set heading 180 if difficulty = "Easy" or difficulty = "Normal" [ a8716 shikigamis 12 18 5 "bkgd" green 0 0 15 ] if difficulty = "Hard" or difficulty = "Lunatic" [ a8716 shikigamis 18 12 5 "bkgd" green 0 0 15 ] a9931 shikigamis 8 5 "bkgd" lime 0 0 5 create-links-to shikigamis with [ color = lime ] [ tie ] ask links [ set hidden? true ] set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a2138 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] clear-output ask shikigamis [ die ] end to a2138 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a6102 = 0 [ set a1862 0 set a4048 4999 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] set xcor [ xcor ] of one-of bosses set ycor [ ycor ] of one-of bosses ] if a6102 mod 8 = 0 [ if difficulty = "Easy" or difficulty = "Normal" [ ask shikigamis with [ color = green ] [ set a7812 heading set heading heading + random 30 - random 30 hatch-bulletXs 1 [ set size 3 set shape "bullet3" set a8255 .1 ] set heading a7812 ] ] ] if a6102 mod 8 = 0 [ if difficulty = "Hard" or difficulty = "Lunatic" [ ask shikigamis with [ color = green ] [ set a7812 heading set heading heading + random 30 - random 30 hatch-bulletXs 1 [ set size 3 set shape "bullet3" set a8255 .15 ] hatch-bulletXs 1 [ set size 3 set shape "bullet3" set a8255 .1 ] set heading a7812 ] ] ] ask shikigamis with [ color = lime ] [ if [ a6102 ] of one-of bosses mod 4 = 0 and difficulty = "Easy" [ a7274 5 3 "bullet3" color 0 .2 ] if [ a6102 ] of one-of bosses mod 4 = 0 and difficulty = "Normal" [ a7274 6 3 "bullet3" color 0 .2 ] if [ a6102 ] of one-of bosses mod 4 = 0 and ( difficulty = "Hard" or difficulty = "Lunatic" ) [ a7274 7 3 "bullet3" color 0 .2 ] if [ a6102 ] of one-of bosses mod 40 = 0 and difficulty = "Easy" [ a7274 3 3 "bullet3" pink 0 .25 ] if [ a6102 ] of one-of bosses mod 40 = 0 and difficulty = "Normal" [ a7274 4 3 "bullet3" pink 0 .25 ] if [ a6102 ] of one-of bosses mod 40 = 0 and difficulty = "Hard" [ a7274 5 3 "bullet3" pink 0 .25 ] if [ a6102 ] of one-of bosses mod 40 = 0 and difficulty = "Lunatic" [ a7274 6 3 "bullet3" pink 0 .25 ] if [ a6102 ] of one-of bosses mod 40 = 0 [ ask bulletXs with [ color = pink ] [ set a6102 10 ] ] ] ask bulletXs with [ color = pink ] [ set a6102 a6102 - 1 if a6102 = 0 [ face Veemon 0 if SFX [ sound:play-sound "wave.wav" ] ] ] set heading heading + random 17 / 2 ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 4999 [ set a6102 ( a6102 - 1 ) a2138 ] end to a9789 clear-output if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if emergency_stop [ stop ] output-print "Time Sign: Frozen Rings of Leaves" ask patch 27 32 [ set plabel "[Time Sign] Frozen Rings of Leaves" ] ask shikigamis [ die ] set a4258 0 set a9679 20 a5009 set a6102 400 hatch-icons 1 [ set size 20 set shape "bkgd" ] set heading 180 set a9633 [ a4048 ] of Veemon 0 set a1862 100000 a5439 carefully [ if a9633 <= [ a4048 ] of Veemon 0 [ set a4116 a4116 + a1862 if SFX [ sound:play-sound "cardget.wav" ] ] ] [ ] set a1862 0 set a4116 a4116 + ( count bulletXs * 10 ) + ( count lasers * 10 ) + ( count bulletIs * 10 ) ask bulletXs [ set label "10" ] ask lasers [ set label "10" ] ask bulletIs [ set label "10" ] a1578 ask icons with [ shape = "bkgd" ] [ die ] ask patches with [ pycor > 25 ] [ set plabel "" ] clear-output ask shikigamis [ die ] end to a5439 if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if a6102 = 0 [ set a1862 0 set a4048 0 ] ask patch -24 32 [ set plabel [ a6102 ] of one-of bosses ] ask patch 20 30 [ set plabel "Bonus:" ] if a9633 != [ a4048 ] of Veemon 0 [ set a1862 0 ] ask patch 27 30 [ set plabel a1862 ] ask icons with [ shape = "bkgd" ] [ ifelse [ a6102 ] of one-of bosses mod 20 < 10 [ set size size + 1 ] [ set size size - 1 ] set xcor [ xcor ] of one-of bosses set ycor [ ycor ] of one-of bosses ] if a6102 mod 20 = 0 [ face Veemon 0 repeat 4 [ if difficulty = "Easy" [ a9931 shikigamis 6 5 "bkgd" green 0 .2 6 ] if difficulty = "Normal" [ a9931 shikigamis 8 5 "bkgd" green 0 .2 6 ] if difficulty = "Hard" [ a9931 shikigamis 10 5 "bkgd" green 0 .2 6 ] if difficulty = "Lunatic" [ a9931 shikigamis 12 5 "bkgd" green 0 .2 6 ] set heading heading + 90 ask shikigamis with [ color = green ] [ set color lime set heading [ heading ] of one-of bosses ] ] ] if a6102 mod 8 = 0 and difficulty = "Easy" [ face Veemon 0 a7274 20 3 "bullet3" color 0 .2 ] if a6102 mod 6 = 0 and difficulty = "Normal" [ face Veemon 0 a7274 24 3 "bullet3" color 0 .2 ] if a6102 mod 5 = 0 and difficulty = "Hard" [ face Veemon 0 a7274 28 3 "bullet3" color 0 .2 ] if a6102 mod 4 = 0 and difficulty = "Lunatic" [ face Veemon 0 a7274 30 3 "bullet3" color 0 .2 ] if a6102 mod 3 = 0 [ ask shikigamis [ hatch-bulletXs 1 [ set color lime set a6989 0 set a8255 0 set a6102 20 set size 3 set shape "bullet3" ] ] ] ask bulletXs [ set a6102 a6102 - 1 if a6102 = 0 [ set a8255 .2 if SFX [ sound:play-sound "wave.wav" ] ] ] ask satori 1 [ hatch-bullets 3 [ a7162 ] ] if emergency_stop [ stop ] ask bullets [ a4857 ] if count Veemons = 0 [ output-print "Game Over. You Lost to Celebi" stop ] if ( first [ a4048 ] of bosses with [ a5440 = "Celebi" ] ) > 0 [ set a6102 ( a6102 - 1 ) a5439 ] end

;;CelebiNonspells: hatch shikis near you, which later explode

;;This is code made by Andrew Fan. DO NOT copy and claim this work as your own.
@#$#@#$#@
GRAPHICS-WINDOW
243
10
595
443
28
33
6.0
1
10
1
1
1
0
0
0
1
-28
28
-33
33
0
0
0
ticks
50.0

BUTTON
12
10
117
43
setup
a9697
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
117
10
225
43
mvsht
a5450
T
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

MONITOR
104
143
176
188
Invincibility
a9483
0
1
11

SWITCH
12
76
135
109
clear-bullets?
clear-bullets?
1
1
-1000

SWITCH
12
43
135
76
show-shots?
show-shots?
0
1
-1000

SWITCH
135
43
225
76
SFX
SFX
0
1
-1000

SWITCH
12
109
225
142
EMERGENCY_STOP
EMERGENCY_STOP
0
1
-1000

SWITCH
11
430
114
463
BSA
BSA
1
1
-1000

BUTTON
135
76
225
109
Invincible
a7851
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

OUTPUT
610
158
934
443
12

MONITOR
610
10
765
55
Score
a6911
0
1
11

MONITOR
610
55
703
100
Lives
a4356
0
1
11

MONITOR
610
100
765
145
Graze
a5358
0
1
11

MONITOR
824
102
886
147
#Bullets
a7979
0
1
11

BUTTON
12
223
84
256
Stage1
a7851 a3408
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
12
190
84
223
START
a5110
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
84
190
164
223
Tutorial
a9096
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

CHOOSER
12
143
104
188
Difficulty
Difficulty
"Easy" "Normal" "Hard" "Lunatic"
0

BUTTON
84
223
164
256
PikachuVS
a7851 a4012
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
12
256
84
289
Stage2
a7851 a4197
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

MONITOR
176
143
236
188
evo-time
a6003
17
1
11

MONITOR
703
55
765
100
#points
a1900
0
1
11

TEXTBOX
595
111
614
129
POC
8
0.0
1

BUTTON
164
190
236
223
Practice
a7428
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

SWITCH
776
44
930
77
show-background?
show-background?
1
1
-1000

BUTTON
84
256
164
289
CelebiVS
a7851 a6951
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
167
223
236
256
St1MB
a7851 a6606
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

BUTTON
167
256
236
289
St2MB
a7851 a2222
NIL
1
T
OBSERVER
NIL
NIL
NIL
NIL
1

TEXTBOX
118
437
242
455
BSA toggles Pen-down
11
0.0
1

TEXTBOX
36
308
214
397
Stage 3 has not been made yet.\nPlease submit suggestions to the following:\nandrewsuicune@gmail.com\n\nBoss: Charizard
11
0.0
1

@#$#@#$#@
# WELCOME TO POKÉDIGI DANMAKU!

## What is this?

This is NetLogo Danmaku game made by Andrew Fan of Stuyvesant High School. This miniproject is a gag and is not to be taken seriously. Permission was not asked for characters that appear. This is my Fifth Project.

This is not free source. Please do not take and adapt the code unless you have been given explicit permission to do so.

Please use NetLogo 5.0.3 with this game if possible.

## How to use
To start, first press setup and mvsht.
Alter the buttons as you wish.
Use the mouse to move. Autofire is on.
The invincibility meter on the left tells how long after you've been hit there is until you can be damaged again.
To turn on/off background pictures, select on/off for show-background?. If on, the bckground pictures will show, but the spell names and all patch labels (including the timeout timer and spellcard bonus info) will be obscured.

For more info, play the tutorial!

P.S. Lunatic Mode lags like hell.

## Scoring
1 shot or bomb shot hits enemy: 10 pts
Grazing normal bullets or lasers: 2000 pts
Grazing invincible bullets or sparks: 200 pts
Spellcard bonuses: Varies, 0 if death
Stage Completion bonueses: Varies depending on stage.
Point item: 10000 each (autocollect by bombing or by going above the POC)

## Player types

Note: Evotime is different for each shottype. Lighdramon and ExVeemon are automatically reverted back to Veemon at the start of most bosses due to their piercing abilities. You will revert to Veemon at the end of each stage.

Veemon: Blasting Type
	Unfocused Shot: Medium Spread V-Cannon
	Focused Shot: Low Spread V-Cannon
	ExAttack: Three Ray Vee Blaster

ExVeemon: Straight-line Blaster
	Unfocused Shot: Low Spread X-Laser
	Focused Shot: Concentrated X-Laser
	ExAttack: X-Laser

Fladramon: Spread Type
	Unfocused Shot: Quadruple Ray Fire Rocket
	Focused Shot: Concentrated Flame Launcher
	ExAttack: Triple Flame Wave

Lighdramon: Angle Blasting Type
	Unfocused Shot: Triple Lightning Piercer
	Focused Shot: Lightning Wipeout
	ExAttack: Lightning Discharge

Magnamon: Honing Type
	Unfocused Shot: Honing Missiles
	Focused Shot: Magna Blaster
	ExAttack: Holy Wipeout

# Stages

In brackets are the Digimentals that can be obtained in the stage., in {} are the difficulties in which the spell can be found.

Stage 1
Stage: Pichu [Courage, Friendship]
Midboss: Pichu
Boss: Pikachu
[001] Pikachu: [Sparkle] Thundershock
[002] Pikachu: [Thunder Sign] Spiral Thunder Blast
[003] Pikachu: [Thunderbolt] Electrical Storm Blaze

Stage 2
Stage: Pichu [Courage, Neutral]
Midboss: Celebi
[004] Celebi: [Spring of Life] Leaves in the Bright Sky {Easy, Normal}
[005] Celebi: [Spring of Time] Withering Leaves of Time {Hard, Lunatic}
Boss: Celebi
[006] Celebi: [Leaf Sign] Rings of Leaves, Bubbles of Time
[007] Celebi: [Leaf Shower] Gently Falling Leaves
[008] Celebi: [Leaf Sign] Psychic Leaves of Time
[009] Celebi: [Time Sign] Frozen Rings of Leaves

# Credits

I do not own the pikachu with a machine gun, the forest background, NetLogo, Pokémon, or Digimon. They are the property of their respective owners. I thank Mr. Brown-Mykolyk and Mr. Brooks for their assistance with teaching NetLogo and the NetLogo Obfuscator, respectively.

# Changelog

## Version 0.2.3 [Nov 10, 2012]
-[Leaf Shower] Gently Falling Leaves uploaded
-[Leaf Sign] Psychic Leaves of Time uploaded
-Celebi Midboss opener kills ExVeemon
-Data Upload
-Fixed Celebi Spell 3's shikigamis (Lunatic was overkill^20)

## Version 0.2.4 [Nov 14, 2012]
-[Time Sign] Frozen Rings of Leaves uploaded, edited
-Data Upload

Release updates: Restore defaults, testing deleted, unnec. shapes gone
@#$#@#$#@
default
true
0
Polygon -7500403 true true 150 5 40 250 150 205 260 250

bkgd
true
15
Circle -1 false true 44 44 212
Line -1 true 150 45 60 210
Line -1 true 150 45 240 210
Line -1 true 60 210 240 210
Line -1 true 60 90 150 255
Line -1 true 150 255 240 90
Line -1 true 60 90 240 90
Circle -1 false true 29 29 242

bullet1
true
0
Line -7500403 true 150 30 150 270
Polygon -7500403 true true 150 30 180 45 210 75 225 135 225 150 225 165 210 225 180 255 150 270
Polygon -7500403 true true 150 30 120 45 90 75 75 120 75 150 75 180 90 225 120 255 150 270
Polygon -1 true false 150 60 120 75 105 120 105 180 120 225 150 240 180 225 195 180 195 120 180 75

bullet10
true
0
Circle -7500403 true true 60 60 180
Circle -1 true false 82 82 136

bullet16
true
0
Polygon -7500403 true true 165 300 150 270 135 255 105 240 90 225 75 210 60 195 60 180 60 165 60 135 60 120 60 105 90 75 120 60 150 60 180 60 210 75 240 105 240 120 255 165 240 210 225 240 210 270 195 285 180 300 165 300
Circle -1 true false 74 74 153

bullet18
true
0
Polygon -7500403 true true 150 60 120 90 105 150 120 210 150 240 180 210 195 150 180 90 150 60
Polygon -16777216 true false 150 90 135 105 120 150 135 195 150 210 165 195 180 150 165 105 150 90

bullet2
true
0
Circle -7500403 false true 120 120 60
Circle -1 true false 30 30 240
Circle -7500403 true true 59 59 182
Circle -16777216 true false 120 120 60

bullet20
true
0
Polygon -1 true false 135 75 165 75 195 120 195 180 165 225 135 225 105 180 105 120 135 75
Polygon -7500403 false true 135 75 165 75 195 120 195 180 165 225 135 225 105 180 105 120

bullet3
true
0
Polygon -7500403 false true 150 60 120 105 105 150 120 195 150 240 180 195 195 150 180 105 150 60
Polygon -1 true false 150 60 120 105 105 150 120 195 150 240 180 195 195 150 180 105 150 60
Polygon -7500403 false true 150 60 120 105 105 150 120 195 150 240 180 195 195 150 180 105

bullet4
true
0
Circle -1 true false 60 60 180
Circle -7500403 true true 75 75 150

bullet5
true
0
Circle -7500403 true true 120 195 60
Circle -16777216 false false 135 210 30
Polygon -7500403 true true 135 45 165 45 210 135 150 195 90 135 135 45

bullet6
false
0
Circle -7500403 true true 60 60 180

bullet7
true
0
Polygon -7500403 true true 150 225 165 218 180 173 165 128 150 98 135 128 120 173 135 218 150 225
Polygon -7500403 true true 135 60 90 150 90 225 150 90 210 225 210 150 165 60
Polygon -7500403 true true 135 61 166 61 149 48
Polygon -1 true false 150 120 135 165 150 210 165 165 150 120
Polygon -7500403 true true 180 150 195 225 210 225
Polygon -7500403 true true 120 150 105 225 90 225

bullet8
true
0
Polygon -7500403 true true 150 45 180 105 249 112 196 158 210 225 150 195 149 46
Polygon -7500403 true true 150 45 120 105 51 112 104 158 90 225 150 195 151 46
Circle -1 true false 105 100 90

bullet9
true
0
Circle -1 true false 60 60 180
Circle -7500403 true true 69 69 162
Circle -1 true false 76 76 148

bulletdie
true
0
Line -7500403 true 75 30 150 150
Line -7500403 true 120 60 150 150
Line -7500403 true 135 30 150 150
Line -7500403 true 165 15 150 150
Line -7500403 true 165 105 150 150
Line -7500403 true 195 60 150 150
Line -7500403 true 225 60 150 150
Line -7500403 true 255 75 150 150
Line -7500403 true 240 105 150 150
Line -7500403 true 60 60 150 150
Line -7500403 true 75 120 150 150
Line -7500403 true 60 135 150 150
Line -7500403 true 60 165 150 150
Line -7500403 true 60 90 150 150
Line -7500403 true 75 195 150 150
Line -7500403 true 60 240 150 150
Line -7500403 true 30 195 150 150
Line -7500403 true 15 150 150 150
Line -7500403 true 30 90 150 150
Line -7500403 true 225 15 150 150
Line -7500403 true 195 15 150 150
Line -7500403 true 45 285 150 150
Line -7500403 true 0 255 150 150
Line -7500403 true 75 270 150 150
Line -7500403 true 105 285 150 150
Line -7500403 true 105 240 150 150
Line -7500403 true 135 240 150 150
Line -7500403 true 150 285 150 150
Line -7500403 true 165 270 150 150
Line -7500403 true 180 240 150 150
Line -7500403 true 225 270 150 150
Line -7500403 true 210 285 150 150
Line -7500403 true 255 270 150 150
Line -7500403 true 285 90 150 150
Line -7500403 true 285 15 150 150
Line -7500403 true 0 15 150 150
Line -7500403 true 285 105 150 150
Line -7500403 true 285 150 150 150
Line -7500403 true 270 135 150 150
Line -7500403 true 255 165 150 150
Line -7500403 true 225 180 150 150
Line -7500403 true 270 225 150 150
Line -7500403 true 270 240 150 150
Line -7500403 true 285 180 150 150
Circle -7500403 true true 22 113 6
Circle -7500403 true true 116 48 2
Circle -7500403 true true 202 68 2
Circle -7500403 true true 279 124 2
Circle -7500403 true true 178 262 6
Circle -7500403 true true 37 204 8
Circle -7500403 true true 133 282 6
Circle -7500403 true true 50 133 2
Circle -7500403 true true 244 195 10
Circle -7500403 true true 120 14 4
Circle -7500403 true true 60 38 4
Circle -7500403 true true 173 12 14

celebi
false
0
Polygon -10899396 true false 90 105 150 0 210 105
Circle -7500403 true true 90 60 120
Line -16777216 false 150 0 183 70
Line -16777216 false 150 0 135 60
Line -16777216 false 150 0 165 60
Line -16777216 false 150 0 150 60
Line -16777216 false 150 0 117 70
Circle -16777216 true false 158 92 40
Circle -1 true false 167 101 22
Circle -11221820 true false 170 104 16
Circle -16777216 true false 102 92 40
Circle -1 true false 111 101 22
Circle -11221820 true false 114 105 16
Polygon -2064490 true false 142 162 149 170 155 163
Circle -10899396 true false 116 179 68
Circle -10899396 true false 169 238 26
Circle -10899396 true false 105 238 26
Polygon -7500403 true true 134 173 66 150 34 145 41 150 31 153 43 157 33 161 70 169 127 185 150 207 172 192
Polygon -7500403 true true 166 173 234 150 266 145 259 150 269 153 257 157 267 161 230 169 173 185 150 207 128 192
Polygon -10899396 true false 120 249 125 255 141 234 168 236 181 249 174 252 141 220
Line -11221820 false 212 53 222 75
Line -11221820 false 88 53 78 75
Polygon -1184463 true false 221 74 222 105 209 117 208 113 218 101
Polygon -1184463 true false 79 74 78 105 91 117 92 113 82 101
Circle -14835848 false false 90 60 120

courage
false
6
Circle -2674135 true false 60 60 180
Circle -955883 true false 135 135 30
Circle -955883 false false 127 127 46
Polygon -955883 true false 135 180 120 165 105 195
Polygon -955883 true false 120 135 135 120 105 105
Polygon -955883 true false 165 120 180 135 195 105
Polygon -955883 true false 180 165 165 180 195 195
Polygon -955883 true false 150 90 135 120 165 120
Polygon -955883 true false 210 150 180 135 180 165
Polygon -955883 true false 150 210 165 180 135 180
Polygon -955883 true false 90 150 120 135 120 165
Rectangle -7500403 true false 148 2 151 84

dshot
true
0
Circle -7500403 false true 45 45 210
Circle -7500403 false true 30 30 240

exticon
false
0
Polygon -5825686 false false 150 60 123 124 121 124 66 125 112 159 95 224 151 183 202 219 185 159 236 123 178 122 150 60
Polygon -5825686 false false 149 36 119 111 117 114 42 118 102 164 82 241 150 196 217 242 197 164 258 117 183 112 151 38

exveemon
false
0
Circle -13791810 true false 111 16 78
Polygon -13791810 true false 135 210 150 345 165 210
Polygon -11221820 true false 175 30 182 53 194 67 199 85 187 71 170 58 162 28
Polygon -11221820 true false 125 30 118 53 106 67 101 85 113 71 130 58 138 28
Polygon -13791810 true false 130 27 111 24 119 36 106 39 115 45 102 52 112 56
Polygon -13791810 true false 170 27 189 24 181 36 194 39 185 45 198 52 188 56
Polygon -1 true false 198 176 203 193 195 182 196 196 192 179 185 194 188 178
Polygon -1 true false 102 176 97 193 105 182 104 196 108 179 115 194 112 178
Polygon -13791810 true false 154 94 184 106 199 140 201 174 193 185 183 178 180 135 161 112
Polygon -13791810 true false 146 94 116 106 101 140 99 174 107 185 117 178 120 135 139 112
Polygon -1 true false 185 283 192 261 179 266
Polygon -1 true false 115 283 108 261 121 266
Polygon -13791810 true false 150 75 122 100 115 138 117 163 127 194 114 247 114 282 127 292 141 281 141 247 149 221 154 222
Polygon -13791810 true false 150 75 178 100 185 138 183 163 173 194 186 247 186 282 173 292 159 281 159 247 151 221 146 222
Polygon -1 true false 156 121 224 71 267 81 287 133 250 118 238 153 206 132 192 158 168 131 156 144
Polygon -1 true false 144 121 76 71 33 81 13 133 50 118 62 153 94 132 108 158 132 131 144 144
Circle -1184463 true false 129 129 42
Circle -1 true false 135 135 30

fcannon
true
0
Polygon -2674135 true false 150 255 240 255 150 45 150 60 150 75 219 241 150 240
Polygon -2674135 true false 195 242 150 136 150 166 180 241
Polygon -2674135 true false 150 255 60 255 150 45 150 60 150 75 81 241 150 240
Polygon -2674135 true false 105 242 150 136 150 166 120 241

fladramon
false
6
Polygon -13791810 true false 130 27 111 24 119 36 106 39 115 45 102 52 112 56
Polygon -13791810 true false 170 27 189 24 181 36 194 39 185 45 198 52 188 56
Polygon -13791810 true false 154 94 184 106 199 140 201 174 193 185 183 178 180 135 161 112
Polygon -13791810 true false 146 94 116 106 101 140 99 174 107 185 117 178 120 135 139 112
Rectangle -7500403 true false 148 -44 152 56
Circle -13791810 true false 111 16 78
Polygon -11221820 true false 125 30 118 53 106 67 101 85 113 71 130 58 138 28
Polygon -11221820 true false 175 30 182 53 194 67 199 85 187 71 170 58 162 28
Polygon -2674135 true false 131 19 151 14 172 19 164 27 141 27
Polygon -2674135 true false 191 122 196 133 182 138 177 124
Polygon -2674135 true false 109 122 104 133 118 138 123 124
Polygon -1 true false 210 205 215 249 204 218 200 252 192 223 186 250 184 206
Polygon -1 true false 90 205 85 249 96 218 100 252 108 223 114 250 116 206
Polygon -2674135 true false 101 153 91 178 91 203 105 221 120 204 120 176 116 153
Polygon -2674135 true false 199 153 209 178 209 203 195 221 180 204 180 176 184 153
Polygon -2674135 true false 108 251 109 284 130 295 143 285 144 264 129 246
Polygon -13791810 true false 150 75 122 100 115 138 117 163 127 194 114 247 114 282 127 292 141 281 141 247 149 221 154 222
Polygon -2674135 true false 192 251 191 284 170 295 157 285 156 264 171 246
Polygon -13791810 true false 150 75 178 100 185 138 183 163 173 194 186 247 186 282 173 292 159 281 159 247 151 221 146 222
Polygon -13791810 true false 135 210 150 345 165 210
Polygon -2674135 true false 171 93 148 104 125 92 115 105 131 116 123 127 119 137 129 137 142 123 158 125
Polygon -2674135 true false 129 93 152 104 175 92 185 105 169 116 177 127 181 137 171 137 158 123 142 125
Circle -1184463 true false 129 129 42
Circle -1 true false 135 135 30

friendship
false
0
Circle -13345367 true false 90 120 120
Circle -13345367 true false 105 45 90
Rectangle -1184463 true false 149 202 151 261
Circle -13791810 false false 136 150 28
Line -11221820 false 153 166 147 176
Polygon -13345367 true false 120 60 105 150 150 135 195 150 180 60
Line -11221820 false 150 150 146 160
Line -11221820 false 153 166 146 160
Circle -13791810 true false 163 160 8
Circle -13791810 true false 129 160 8
Line -16777216 false 110 111 190 111
Line -16777216 false 135 90 120 75
Line -16777216 false 105 90 120 75
Line -16777216 false 195 90 180 75
Line -16777216 false 165 90 180 75
Line -16777216 false 165 90 150 75
Line -16777216 false 135 90 150 75

hakkero
true
0
Polygon -1184463 true false 120 60 195 60 240 105 240 195 210 225 195 240 105 240 60 195 60 105 105 60
Line -16777216 false 105 60 195 240
Line -16777216 false 195 60 105 240
Line -16777216 false 60 195 240 105
Line -16777216 false 60 105 240 195
Line -16777216 false 135 225 165 225
Line -16777216 false 135 210 165 210
Line -16777216 false 135 90 165 90
Line -16777216 false 135 75 165 75
Line -16777216 false 225 165 225 135
Line -16777216 false 75 135 75 165
Line -16777216 false 90 135 90 165
Line -16777216 false 210 135 210 165
Line -16777216 false 105 210 90 195
Line -16777216 false 105 90 90 105
Line -16777216 false 195 90 210 105
Line -16777216 false 195 210 210 195
Circle -7500403 true true 105 105 90

hbullet
true
0

laser1
true
0
Rectangle -7500403 true true 75 -195 225 300
Line -7500403 true 75 165 225 165
Rectangle -1 true false 90 -195 210 300

laser2
true
0
Rectangle -1 true false 127 75 172 375
Polygon -1 true false 135 77 172 75 165 29 150 -1 135 29 126 77
Polygon -7500403 true true 195 375 195 75 165 0 150 -15 180 0 210 75 210 375
Polygon -7500403 true true 105 375 105 75 135 0 150 -15 120 0 90 75 90 375

laser3
true
0
Rectangle -7500403 true true 120 -90 180 510

laser4
true
0
Rectangle -13840069 true false 105 0 150 300
Rectangle -11221820 true false 150 0 195 300
Rectangle -1 true false 120 0 180 300
Line -11221820 false 180 0 120 75
Line -11221820 false 120 75 180 150
Line -11221820 false 180 150 120 225
Line -11221820 false 120 225 180 300
Line -13840069 false 180 225 120 300
Line -13840069 false 120 0 180 75
Line -13840069 false 180 75 120 150
Line -13840069 false 120 150 180 225
Line -1 false 225 0 225 300
Line -1 false 75 0 75 300
Line -13840069 false 210 0 210 300
Line -11221820 false 90 0 90 300

laser5
true
0
Line -7500403 true 120 450 120 150
Line -7500403 true 120 -150 120 150
Line -7500403 true 180 -150 180 150
Line -7500403 true 180 450 180 150

lighdramon
false
6
Rectangle -1184463 true false 148 -44 152 56
Circle -16777216 true false 111 16 78
Polygon -13791810 true false 135 210 150 345 165 210
Polygon -13345367 true false 176 54 175 10 164 55
Polygon -13345367 true false 124 54 125 10 136 55
Polygon -1 true false 187 279 194 256 178 272
Polygon -1 true false 113 279 106 256 122 272
Polygon -16777216 true false 150 75 178 100 185 138 183 163 173 194 186 247 186 282 173 292 159 281 159 247 151 221 146 222
Polygon -16777216 true false 150 75 122 100 115 138 117 163 127 194 114 247 114 282 127 292 141 281 141 247 149 221 154 222
Circle -1184463 true false 129 129 42
Circle -1 true false 135 135 30
Polygon -1 true false 204 95 210 74 201 83 198 64 192 80 190 70 185 89
Polygon -1 true false 96 95 90 74 99 83 102 64 108 80 110 70 115 89
Polygon -16777216 true false 171 117 179 88 191 82 198 84 201 99 191 142 177 138
Polygon -16777216 true false 129 117 121 88 109 82 102 84 99 99 109 142 123 138
Polygon -1184463 true false 137 112 84 91 30 118 83 108 136 126
Polygon -1184463 true false 163 112 216 91 270 118 217 108 164 126

magnamon
false
0
Circle -13791810 true false 111 16 78
Polygon -13791810 true false 130 27 111 24 119 36 106 39 115 45 102 52 112 56
Polygon -13791810 true false 170 27 189 24 181 36 194 39 185 45 198 52 188 56
Polygon -1 true false 198 176 203 193 195 182 196 196 192 179 185 194 188 178
Polygon -1 true false 102 176 97 193 105 182 104 196 108 179 115 194 112 178
Polygon -13791810 true false 154 94 184 106 199 140 201 174 193 185 183 178 180 135 161 112
Polygon -13791810 true false 146 94 116 106 101 140 99 174 107 185 117 178 120 135 139 112
Polygon -1184463 true false 185 283 192 261 179 266
Polygon -1184463 true false 115 283 108 261 121 266
Polygon -13791810 true false 150 75 122 100 115 138 117 163 127 194 114 247 114 282 127 292 141 281 141 247 149 221 154 222
Polygon -13791810 true false 150 75 178 100 185 138 183 163 173 194 186 247 186 282 173 292 159 281 159 247 151 221 146 222
Circle -1184463 true false 129 129 42
Circle -1 true false 135 135 30
Polygon -1184463 true false 150 0 135 30 165 30
Polygon -1184463 true false 180 45 195 15 165 30
Polygon -1184463 true false 120 45 105 15 135 30
Polygon -1184463 true false 135 90 120 135 180 135 165 90 150 90
Polygon -1184463 true false 189 131 197 128 201 136 202 169 179 172 177 134
Polygon -1184463 true false 111 131 103 128 99 136 98 169 121 172 123 134
Polygon -1184463 true false 156 95 200 90 218 110 179 104 137 110
Polygon -1184463 true false 144 95 100 90 82 110 121 104 163 110
Polygon -1184463 true false 177 198 189 247 188 260 157 268 157 229 155 212
Polygon -1184463 true false 123 198 111 247 112 260 143 268 143 229 145 212
Polygon -1184463 true false 187 279 173 293 156 280 156 273 187 266 187 277
Polygon -1184463 true false 113 279 127 293 144 280 144 273 113 266 113 277
Polygon -13791810 true false 135 197 150 345 168 196
Polygon -1184463 true false 171 47 176 5 156 44
Polygon -1184463 true false 129 47 124 5 144 44
Polygon -1184463 true false 196 91 259 88 294 98 215 109
Polygon -1184463 true false 104 91 41 88 6 98 85 109
Polygon -1184463 true false 177 181 220 207 220 226 174 193 138 193 138 182
Polygon -1184463 true false 123 181 80 207 80 226 126 193 162 193 162 182

mcannon
true
0
Polygon -1184463 true false 150 255 240 255 150 45 150 60 150 75 219 241 150 240
Polygon -1184463 true false 150 255 60 255 150 45 150 60 150 75 81 241 150 240
Polygon -1184463 true false 195 242 150 136 149 166 180 241
Polygon -1184463 true false 105 242 150 136 150 166 120 241

miracles
false
0
Rectangle -1184463 true false 60 60 240 240
Polygon -16777216 false false 120 75 180 75 225 120 225 180 180 225 135 225 120 225 75 180 75 120 120 75
Rectangle -1184463 true false 105 240 195 255
Line -16777216 false 105 240 195 240
Line -16777216 false 180 240 180 255
Line -16777216 false 120 240 120 255
Line -16777216 false 135 240 135 255
Line -16777216 false 165 240 165 255
Line -16777216 false 150 240 150 255
Polygon -16777216 false false 150 210 135 195 150 165 165 195
Polygon -16777216 false false 150 90 135 105 150 135 165 105
Polygon -16777216 false false 195 154 210 184 186 171
Polygon -16777216 false false 120 165 105 150 135 120 150 150 165 120 195 150 180 165 180 150 165 135 150 165 135 135 120 150
Polygon -16777216 false false 105 154 90 184 114 171

neutral
false
0
Circle -13791810 true false 60 60 180
Polygon -955883 true false 120 90 150 135 180 90 195 105 150 165 105 105
Polygon -955883 true false 165 150 195 195 180 210 150 165
Polygon -955883 true false 135 150 105 195 120 210 150 165
Line -1184463 false 180 105 150 150
Line -1184463 false 120 105 150 150

pichu
false
0
Circle -1184463 true false 90 60 120
Circle -1184463 true false 105 150 90
Circle -16777216 true false 165 90 30
Circle -16777216 true false 105 90 30
Circle -2064490 true false 183 127 16
Circle -1 true false 176 95 14
Circle -1 true false 117 95 14
Circle -2064490 true false 101 127 16
Circle -16777216 true false 148 129 2
Polygon -16777216 true false 195 90 225 75 240 15 180 30 165 60
Polygon -16777216 true false 105 90 75 75 60 15 120 30 135 60
Polygon -1184463 true false 225 30 210 75 195 90 165 60 180 45
Polygon -1184463 true false 75 30 90 75 105 90 135 60 120 45
Polygon -2674135 true false 142 140 143 153 149 159 154 153 155 140
Polygon -16777216 true false 130 170 177 171 168 180 162 174 158 189 153 175 150 187 143 175 141 190 134 176 128 177 123 170
Circle -1184463 true false 167 220 24
Circle -1184463 true false 109 220 24
Circle -1184463 true false 187 175 23
Circle -1184463 true false 90 175 23

pikachu
false
0
Circle -1184463 true false 90 60 120
Circle -1184463 true false 105 150 90
Circle -2674135 true false 183 127 16
Circle -2674135 true false 101 127 16
Circle -16777216 true false 148 129 2
Polygon -1184463 true false 240 15 210 75 195 105 150 75 180 60
Polygon -2674135 true false 142 140 143 153 149 159 154 153 155 140
Circle -1184463 true false 187 175 23
Circle -1184463 true false 90 176 23
Polygon -16777216 true false 240 15 225 45 211 36
Polygon -1184463 true false 60 15 90 75 105 105 150 75 120 60
Polygon -16777216 true false 60 15 75 45 89 36
Circle -16777216 true false 165 90 30
Circle -16777216 true false 105 90 30
Circle -1 true false 117 95 14
Circle -1 true false 176 95 14
Circle -1184463 true false 165 225 23
Circle -1184463 true false 112 225 23
Polygon -1184463 true false 177 205 204 223 204 207 222 209 219 183 237 181 227 128 262 127 254 195 230 196 231 220 210 215 205 232 183 214

point
false
0
Rectangle -13345367 true false 45 45 255 255
Rectangle -11221820 true false 60 60 240 240
Rectangle -13345367 true false 75 75 225 225
Polygon -1 true false 120 90 135 90 135 105 180 105 180 120 135 120 135 135 195 135 195 180 105 180 105 135 120 135 120 90
Rectangle -13345367 true false 120 150 180 165
Rectangle -1 true false 98 195 113 210
Rectangle -1 true false 186 195 201 210
Rectangle -1 true false 156 195 171 210
Rectangle -1 true false 127 195 142 210

satori
false
0
Circle -1 true false 75 75 150
Polygon -5825686 true false 148 68 182 75 210 94 228 127 232 149 222 139 223 167 211 123 212 146 196 115 190 132 177 97 174 123 166 100 158 115 153 94 147 107
Polygon -5825686 true false 152 68 118 75 90 94 72 127 68 149 78 139 77 167 89 123 88 146 104 115 110 132 123 97 126 123 134 100 142 115 147 94 153 107
Circle -8630108 true false 172 125 24
Circle -8630108 true false 104 125 24
Line -5825686 false 178 187 160 198
Line -5825686 false 122 187 140 198
Line -5825686 false 141 198 161 198
Polygon -1184463 true false 200 91 203 78 211 77 216 90 199 114 200 90
Polygon -1184463 true false 201 91 198 78 190 77 185 90 202 114 201 90

shikigami
true
15
Circle -7500403 false false 30 30 240
Line -7500403 false 135 270 195 195
Line -7500403 false 165 30 105 105
Line -7500403 false 195 195 105 105
Circle -1 true true 135 75 60
Polygon -1 true true 165 31 150 29 135 30 120 34 105 38 90 45 75 56 60 68 54 79 43 93 35 109 31 123 29 145 29 161 32 175 36 191 43 205 53 220 61 229 71 240 85 250 100 260 116 265 130 269 135 269 194 195 108 104 163 30
Circle -16777216 true false 105 165 60

talisman
true
10
Rectangle -1 true false 90 60 210 210
Line -13345367 true 135 75 150 75
Rectangle -13345367 false true 120 90 180 120
Line -13345367 true 150 135 150 195
Line -13345367 true 120 150 180 150
Line -13345367 true 105 150 105 195
Line -13345367 true 195 150 195 195
Line -13345367 true 150 75 165 75
Line -13345367 true 120 165 120 195
Line -13345367 true 180 180 180 165
Line -13345367 true 180 180 180 195
Line -13345367 true 105 135 135 135
Line -13345367 true 165 135 195 135
Line -13345367 true 135 105 165 105
Line -13345367 true 150 75 150 90
Line -13345367 true 105 75 135 75
Line -13345367 true 195 75 165 75
Rectangle -13345367 true true 202 59 210 211
Rectangle -13345367 true true 90 59 98 211
Rectangle -13345367 true true 91 204 210 211
Rectangle -13345367 true true 90 58 209 65

vcannon
true
0
Polygon -13345367 true false 150 255 240 255 150 45 150 60 150 75 219 241 150 240
Polygon -13345367 true false 150 255 60 255 150 45 150 60 150 75 81 241 150 240
Polygon -13345367 true false 195 242 150 136 149 166 180 241
Polygon -13345367 true false 105 242 150 136 150 166 120 241

veemon
false
0
Circle -13791810 true false 111 49 78
Polygon -13791810 true false 150 111 173 130 180 155 179 198 166 224 148 230 148 116
Polygon -13791810 true false 150 111 127 130 120 155 121 198 134 224 152 230 152 116
Polygon -1 true false 180 245 189 235 180 239 186 226 176 233
Polygon -1 true false 120 245 111 235 120 239 114 226 124 233
Polygon -13791810 true false 128 208 117 225 118 245 132 247 140 239 150 216
Polygon -13791810 true false 172 208 183 225 182 245 168 247 160 239 150 216
Polygon -13791810 true false 139 213 150 298 160 212
Polygon -1 true false 209 98 210 87 205 92 205 84 202 93 199 88 197 99
Polygon -1 true false 91 98 90 87 95 92 95 84 98 93 101 88 103 99
Polygon -13791810 true false 168 161 201 132 211 101 205 89 197 99 190 127 166 143
Polygon -13791810 true false 132 161 99 132 89 101 95 89 103 99 110 127 134 143
Circle -1184463 true false 128 128 42
Polygon -11221820 true false 175 60 182 83 194 97 199 115 187 101 170 88 162 58
Polygon -11221820 true false 125 60 118 83 106 97 101 115 113 101 130 88 138 58
Circle -1 true false 135 135 30

xlaser
false
0
Polygon -2674135 true false 225 0 300 75 75 300 0 225
Polygon -2674135 true false 75 0 0 75 225 300 300 225
Polygon -955883 true false 75 15 15 75 90 150 15 225 75 285 150 210 225 285 285 225 210 150 285 75 225 15 150 90
Polygon -1184463 true false 75 45 45 75 120 150 45 225 75 255 150 180 225 255 255 225 180 150 255 75 225 45 150 120

@#$#@#$#@
NetLogo 5.0.3
@#$#@#$#@
@#$#@#$#@
@#$#@#$#@
@#$#@#$#@
@#$#@#$#@
default
0.0
-0.2 0 1.0 0.0
0.0 1 1.0 0.0
0.2 0 1.0 0.0
link direction
true
0
Line -7500403 true 150 150 90 180
Line -7500403 true 150 150 210 180

clear
0.0
-0.2 0 0.0 1.0
0.0 0 0.0 1.0
0.2 0 0.0 1.0
link direction
true
0

@#$#@#$#@
0
@#$#@#$#@
