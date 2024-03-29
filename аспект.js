var nodes = [{'id': '15', 'label': 'творчество', 'title': 'Литературоведение, 1497', 'value': '31', 'group': '3', 'shape': 'diamond'},
{'id': '95', 'label': 'аспект', 'title': 'Философский и др. дискурсы, 134', 'value': '3', 'group': '9', 'shape': 'triangle', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
{'id': '48', 'label': 'исторический поэтика', 'title': 'Историческая поэтика, 860', 'value': '9', 'group': '9', 'shape': 'dot'},
{'id': '19', 'label': 'проблема', 'title': 'Литературоведение, 1752', 'value': '27', 'group': '9', 'shape': 'diamond'},
];
var edges = [{'from': '15', 'to': '24', 'title': '51', 'value': '51'},
{'from': '19', 'to': '5', 'title': '56', 'value': '56'},
{'from': '3', 'to': '15', 'title': '38', 'value': '38'},
{'from': '15', 'to': '14', 'title': '141', 'value': '141'},
{'from': '19', 'to': '15', 'title': '100', 'value': '100'},
{'from': '28', 'to': '15', 'title': '47', 'value': '47'},
{'from': '2', 'to': '15', 'title': '48', 'value': '48'},
{'from': '5', 'to': '15', 'title': '78', 'value': '78'},
{'from': '13', 'to': '15', 'title': '52', 'value': '52'},
{'from': '8', 'to': '19', 'title': '34', 'value': '34'},
{'from': '19', 'to': '4', 'title': '28', 'value': '28'},
{'from': '19', 'to': '1', 'title': '86', 'value': '86'},
{'from': '19', 'to': '17', 'title': '166', 'value': '166'},
{'from': '88', 'to': '15', 'title': '26', 'value': '26'},
{'from': '19', 'to': '32', 'title': '26', 'value': '26'},
{'from': '23', 'to': '19', 'title': '28', 'value': '28'},
{'from': '15', 'to': '78', 'title': '36', 'value': '36'},
{'from': '4', 'to': '15', 'title': '67', 'value': '67'},
{'from': '18', 'to': '15', 'title': '29', 'value': '29'},
{'from': '21', 'to': '15', 'title': '42', 'value': '42'},
{'from': '6', 'to': '19', 'title': '39', 'value': '39'},
{'from': '19', 'to': '14', 'title': '53', 'value': '53'},
{'from': '15', 'to': '7', 'title': '30', 'value': '30'},
{'from': '48', 'to': '19', 'title': '473', 'value': '473'},
{'from': '2', 'to': '19', 'title': '28', 'value': '28'},
{'from': '34', 'to': '19', 'title': '33', 'value': '33'},
{'from': '25', 'to': '15', 'title': '47', 'value': '47'},
{'from': '10', 'to': '15', 'title': '58', 'value': '58'},
{'from': '95', 'to': '15', 'title': '25', 'value': '25'},
{'from': '16', 'to': '19', 'title': '66', 'value': '66'},
{'from': '1', 'to': '15', 'title': '58', 'value': '58'},
{'from': '8', 'to': '15', 'title': '76', 'value': '76'},
{'from': '19', 'to': '7', 'title': '45', 'value': '45'},
{'from': '10', 'to': '19', 'title': '47', 'value': '47'},
{'from': '33', 'to': '15', 'title': '28', 'value': '28'},
{'from': '17', 'to': '15', 'title': '46', 'value': '46'},
{'from': '25', 'to': '19', 'title': '32', 'value': '32'},
{'from': '15', 'to': '51', 'title': '36', 'value': '36'},
{'from': '3', 'to': '19', 'title': '29', 'value': '29'},
{'from': '48', 'to': '100', 'title': '45', 'value': '45'},
{'from': '48', 'to': '17', 'title': '99', 'value': '99'},
{'from': '72', 'to': '48', 'title': '73', 'value': '73'},
{'from': '95', 'to': '19', 'title': '61', 'value': '61'},
{'from': '95', 'to': '48', 'title': '48', 'value': '48'},
{'from': '40', 'to': '15', 'title': '36', 'value': '36'},
{'from': '19', 'to': '19', 'title': '74', 'value': '74'},
{'from': '72', 'to': '19', 'title': '30', 'value': '30'},
{'from': '15', 'to': '26', 'title': '45', 'value': '45'},
{'from': '16', 'to': '15', 'title': '30', 'value': '30'},
{'from': '48', 'to': '1', 'title': '25', 'value': '25'},
{'from': '29', 'to': '15', 'title': '32', 'value': '32'},
{'from': '32', 'to': '15', 'title': '47', 'value': '47'},
{'from': '193', 'to': '48', 'title': '39', 'value': '39'},
{'from': '48', 'to': '14', 'title': '29', 'value': '29'},
{'from': '60', 'to': '15', 'title': '39', 'value': '39'},
{'from': '15', 'to': '12', 'title': '43', 'value': '43'},
{'from': '19', 'to': '134', 'title': '31', 'value': '31'},
{'from': '48', 'to': '59', 'title': '29', 'value': '29'},
{'from': '19', 'to': '130', 'title': '27', 'value': '27'},
{'from': '19', 'to': '24', 'title': '28', 'value': '28'},
{'from': '6', 'to': '15', 'title': '37', 'value': '37'},
{'from': '22', 'to': '19', 'title': '33', 'value': '33'},
{'from': '22', 'to': '15', 'title': '29', 'value': '29'},
{'from': '19', 'to': '27', 'title': '25', 'value': '25'},
];
