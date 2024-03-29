var nodes = [{'id': '6', 'label': 'время', 'title': 'Литературоведение, 2345', 'value': '47', 'group': '2', 'shape': 'diamond'},
{'id': '48', 'label': 'исторический поэтика', 'title': 'Историческая поэтика, 860', 'value': '9', 'group': '9', 'shape': 'dot'},
{'id': '100', 'label': 'категория', 'title': 'Философский и др. дискурсы, 103', 'value': '3', 'group': '9', 'shape': 'triangle', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
{'id': '16', 'label': 'жанр', 'title': 'Историческая поэтика, 1394', 'value': '30', 'group': '3', 'shape': 'dot'},
];
var edges = [{'from': '6', 'to': '2', 'title': '56', 'value': '56'},
{'from': '6', 'to': '11', 'title': '50', 'value': '50'},
{'from': '6', 'to': '35', 'title': '45', 'value': '45'},
{'from': '6', 'to': '6', 'title': '113', 'value': '113'},
{'from': '6', 'to': '32', 'title': '27', 'value': '27'},
{'from': '144', 'to': '6', 'title': '38', 'value': '38'},
{'from': '6', 'to': '40', 'title': '31', 'value': '31'},
{'from': '23', 'to': '6', 'title': '28', 'value': '28'},
{'from': '6', 'to': '19', 'title': '39', 'value': '39'},
{'from': '6', 'to': '36', 'title': '29', 'value': '29'},
{'from': '16', 'to': '30', 'title': '45', 'value': '45'},
{'from': '6', 'to': '20', 'title': '35', 'value': '35'},
{'from': '8', 'to': '6', 'title': '64', 'value': '64'},
{'from': '6', 'to': '5', 'title': '83', 'value': '83'},
{'from': '6', 'to': '13', 'title': '68', 'value': '68'},
{'from': '48', 'to': '19', 'title': '473', 'value': '473'},
{'from': '6', 'to': '33', 'title': '25', 'value': '25'},
{'from': '16', 'to': '27', 'title': '30', 'value': '30'},
{'from': '16', 'to': '38', 'title': '40', 'value': '40'},
{'from': '6', 'to': '26', 'title': '31', 'value': '31'},
{'from': '16', 'to': '33', 'title': '25', 'value': '25'},
{'from': '6', 'to': '3', 'title': '79', 'value': '79'},
{'from': '16', 'to': '5', 'title': '34', 'value': '34'},
{'from': '16', 'to': '19', 'title': '66', 'value': '66'},
{'from': '16', 'to': '39', 'title': '30', 'value': '30'},
{'from': '16', 'to': '16', 'title': '62', 'value': '62'},
{'from': '8', 'to': '16', 'title': '35', 'value': '35'},
{'from': '16', 'to': '14', 'title': '74', 'value': '74'},
{'from': '81', 'to': '16', 'title': '27', 'value': '27'},
{'from': '6', 'to': '17', 'title': '44', 'value': '44'},
{'from': '16', 'to': '1', 'title': '103', 'value': '103'},
{'from': '16', 'to': '69', 'title': '36', 'value': '36'},
{'from': '16', 'to': '17', 'title': '68', 'value': '68'},
{'from': '16', 'to': '10', 'title': '100', 'value': '100'},
{'from': '16', 'to': '25', 'title': '59', 'value': '59'},
{'from': '6', 'to': '1', 'title': '161', 'value': '161'},
{'from': '6', 'to': '38', 'title': '51', 'value': '51'},
{'from': '6', 'to': '59', 'title': '51', 'value': '51'},
{'from': '9', 'to': '6', 'title': '33', 'value': '33'},
{'from': '6', 'to': '29', 'title': '30', 'value': '30'},
{'from': '6', 'to': '67', 'title': '49', 'value': '49'},
{'from': '6', 'to': '24', 'title': '31', 'value': '31'},
{'from': '6', 'to': '31', 'title': '31', 'value': '31'},
{'from': '6', 'to': '10', 'title': '73', 'value': '73'},
{'from': '6', 'to': '4', 'title': '85', 'value': '85'},
{'from': '6', 'to': '22', 'title': '51', 'value': '51'},
{'from': '6', 'to': '18', 'title': '34', 'value': '34'},
{'from': '6', 'to': '68', 'title': '138', 'value': '138'},
{'from': '48', 'to': '100', 'title': '45', 'value': '45'},
{'from': '6', 'to': '55', 'title': '27', 'value': '27'},
{'from': '6', 'to': '45', 'title': '28', 'value': '28'},
{'from': '48', 'to': '17', 'title': '99', 'value': '99'},
{'from': '72', 'to': '48', 'title': '73', 'value': '73'},
{'from': '95', 'to': '48', 'title': '48', 'value': '48'},
{'from': '16', 'to': '4', 'title': '47', 'value': '47'},
{'from': '6', 'to': '27', 'title': '36', 'value': '36'},
{'from': '16', 'to': '34', 'title': '53', 'value': '53'},
{'from': '6', 'to': '14', 'title': '44', 'value': '44'},
{'from': '16', 'to': '15', 'title': '30', 'value': '30'},
{'from': '16', 'to': '119', 'title': '35', 'value': '35'},
{'from': '48', 'to': '1', 'title': '25', 'value': '25'},
{'from': '6', 'to': '7', 'title': '58', 'value': '58'},
{'from': '193', 'to': '48', 'title': '39', 'value': '39'},
{'from': '6', 'to': '16', 'title': '37', 'value': '37'},
{'from': '6', 'to': '100', 'title': '29', 'value': '29'},
{'from': '16', 'to': '100', 'title': '29', 'value': '29'},
{'from': '48', 'to': '14', 'title': '29', 'value': '29'},
{'from': '6', 'to': '21', 'title': '34', 'value': '34'},
{'from': '6', 'to': '25', 'title': '45', 'value': '45'},
{'from': '16', 'to': '195', 'title': '37', 'value': '37'},
{'from': '16', 'to': '7', 'title': '29', 'value': '29'},
{'from': '48', 'to': '59', 'title': '29', 'value': '29'},
{'from': '16', 'to': '44', 'title': '34', 'value': '34'},
{'from': '16', 'to': '197', 'title': '27', 'value': '27'},
{'from': '6', 'to': '44', 'title': '26', 'value': '26'},
{'from': '16', 'to': '198', 'title': '29', 'value': '29'},
{'from': '6', 'to': '15', 'title': '37', 'value': '37'},
{'from': '6', 'to': '41', 'title': '31', 'value': '31'},
{'from': '6', 'to': '12', 'title': '37', 'value': '37'},
{'from': '6', 'to': '56', 'title': '25', 'value': '25'},
{'from': '37', 'to': '6', 'title': '35', 'value': '35'},
{'from': '16', 'to': '66', 'title': '31', 'value': '31'},
{'from': '16', 'to': '22', 'title': '80', 'value': '80'},
];
