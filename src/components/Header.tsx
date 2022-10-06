import { View, Text ,ImageSourcePropType  ,StyleProp,  TextStyle,
    ViewStyle,} from 'react-native'
import React from 'react'



interface HeaderProps {
    leftIcon?: ImageSourcePropType
    rightIcon?: ImageSourcePropType
    leftText?: string
    rightText?: string
    title?: string
    titleStyles?: StyleProp<TextStyle>
    subtitle?: string
    leftAction?: () => void
    rightAction?: () => void
    rightActionEnabled?: boolean
    
  }

  const Header: React.FC<HeaderProps> = ({
    leftIcon,
    rightIcon,
    leftText,
    rightText,
    title,
    titleStyles,
    subtitle,
    leftAction,
    rightAction,
    rightActionEnabled = true,
   
  }) => {
    const HITSLOPE = {
      top: 40,
      left: 40,
      bottom: 40,
      right: 40,
    }
  
    return (
      <View style={{
        flexDirection: 'row',
      }}>
     
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      height: 50,
      justifyContent: 'center',
    },
  
   
  })

export default Header

