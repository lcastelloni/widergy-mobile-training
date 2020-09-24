import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Expression from '../Expression';
import stylesbuttons from '../buttons/styles';

const ExpressionsList = props => {
  return (
    <View style={stylesbuttons.containerListaExpresiones}>
      {props.expressions.map(expression => (
        <Expression
          key={expression.id}
          id={expression.id}
          textoExpresion={expression.text}
          editExpression={props.editExpression}
          deleteExpression={props.deleteExpression}
        />
      ))}
    </View>
  );
};

const mapStateToProps = state => ({ expressions: state.HistoryApp.expressions });

export default connect(mapStateToProps)(ExpressionsList);
