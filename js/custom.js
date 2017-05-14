$( document ).ready(function() {		

    $('input.range').rangeslider({
        polyfill: false
    });	
    
    max_bonus = 2200;
    percent_plan = 0.85;
    income = 1;
    ratio_part2 = 4;

    //ustawia formularz w zaleznosci od stanowiska
    $('select').on("input change" , function() {	
        var position = $('#position option:selected').val();	

        switch (position) {
            case 'position1':
                $('#subordinates').hide()
                $('#income').hide()
                max_bonus = 2200;
                percent_plan = 0.85;
                income = 1;
                ratio_part2 = 4;
                $('#plan').attr('min','200')
                $('#plan').attr('max','1000')
                $('#plan').val('330')
                $('#realisation').attr('min','200')
                $('#realisation').attr('max','1000')
                $('#realisation').val('330')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('330');
                $('#realisation_label').val('330');
                $('#checkboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);

                break;

            case 'position2':
                $('#subordinates').hide()
                $('#income').hide()
                max_bonus = 2600;
                percent_plan = 0.85;
                income = 1;
                ratio_part2 = 4;
                $('#plan').attr('min','300')
                $('#plan').attr('max','1000')
                $('#plan').val('450')
                $('#realisation').attr('min','300')
                $('#realisation').attr('max','1000')
                $('#realisation').val('450')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('450');
                $('#realisation_label').val('450');	
                $('#checkboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);
                break;

            case 'position3':
                $('#subordinates').hide()
                $('#income').hide()
                max_bonus = 2800;
                percent_plan = 0.85;
                income = 1;
                ratio_part2 = 4;
                $('#plan').attr('min','440')
                $('#plan').attr('max','1000')
                $('#plan').val('650')
                $('#realisation').attr('min','440')
                $('#realisation').attr('max','1000')
                $('#realisation').val('650')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('650');
                $('#realisation_label').val('650');
                $('#checkboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);

                break;

            case 'position4':
                $('#subordinates').hide()
                $('#income').show()
                max_bonus = 2800;
                percent_plan = 0.85;
                income = 1.2;
                ratio_part2 = 4;
                $('#plan').attr('min','230')
                $('#plan').attr('max','950')
                $('#plan').val('350')
                $('#realisation').attr('min','230')
                $('#realisation').attr('max','950')
                $('#realisation').val('350')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('350');
                $('#realisation_label').val('350');
                $('#checkboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);
                break;

            case 'position5':
                $('#subordinates').show();
                $('#income').hide()
                max_bonus = 3500;
                percent_plan = 0.90;
                income = 1;
                ratio_part2 = 2;
                $('#plan').attr('min','1010')
                $('#plan').attr('max','8000')
                $('#plan').val('2900')
                $('#realisation').attr('min','1010')
                $('#realisation').attr('max','8000')
                $('#realisation').val('2900')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('2900');
                $('#realisation_label').val('2900');
                $('#checkoboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);
                $('#subordinate_label').val('1');
                break;

            case 'position6':
                $('#subordinates').show();
                $('#income').show()
                max_bonus = 3500;
                percent_plan = 0.90;
                income = 1.2;
                ratio_part2 = 2;
                $('#plan').attr('min','560')
                $('#plan').attr('max','8000')
                $('#plan').val('2700')
                $('#realisation').attr('min','560')
                $('#realisation').attr('max','8000')
                $('#realisation').val('2700')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('2700');
                $('#realisation_label').val('2700');
                $('#checkboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);
                $('#subordinate_label').val('1');
                break;

            case 'position7':
                $('#subordinates').show();
                $('#income').show()
                max_bonus = 5000;
                percent_plan = 0.85;
                income = 1.2;
                ratio_part2 = 4;
                $('#plan').attr('min','360')
                $('#plan').attr('max','6300')
                $('#plan').val('1250')
                $('#realisation').attr('min','360')
                $('#realisation').attr('max','6300')
                $('#realisation').val('1250')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('1250');
                $('#realisation_label').val('1250');
                $('#checkboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);
                $('#subordinate_label').val('1');
                break;

            case 'position8':
                $('#subordinates').show();
                $('#income').show()
                max_bonus = 7500;
                percent_plan = 0.90;
                income = 1.2;
                ratio_part2 = 2;
                $('#plan').attr('min','3300')
                $('#plan').attr('max','26500')
                $('#plan').val('12000')
                $('#realisation').attr('min','3300')
                $('#realisation').attr('max','26500')
                $('#realisation').val('12000')
                $('input.range').rangeslider('update', true);
                $('#plan_label').val('12000');
                $('#realisation_label').val('12000');
                $('#checkboxInner').attr('checked',false);
                $('#purpose2').attr('checked',false);
                $('#purpose1').attr('checked',false);
                $('#purpose3').attr('checked',true);
                $('#subordinate_label').val('1');
                break;
        }
        licz_premie(max_bonus, percent_plan, income, ratio_part2);
    })


    function licz_premie(max_bonus, percent_plan, income) {

        //wiąże zmiany w input range ze zmianami wartości pola tekstowego
        $('#plan').on('input', function(){
            $('#plan_label').val($('#plan').val());
        });
        $('#realisation').on('input', function(){
            $('#realisation_label').val($('#realisation').val());
        });
        //wiąże zmiany w input text z input range
        $('#plan_label').on('input', function(){
            $('#plan').val($('#plan_label').val());
        });
        
        $('#realisation_label').on('input', function(){
            $('#realisation').val($('#realisation_label').val());
        });

        //additional variables from checkoboxes
        var purpose1 = $("#purpose1").attr("checked") ? parseFloat($('#purpose1').val()) : 0;
        var purpose2 = $("#purpose2").attr("checked") ? parseFloat($('#purpose2').val()) : 0;
        var purpose3 = $("#purpose3").attr("checked") ? 1 : parseFloat($('#purpose3').val());
        var income = $('#income input').attr("checked") ? income : 1;

        //czesc1 wzoru
        //var part1 = $('#realisation').attr('min') * 0.8
        var part1 = ($('#plan').val() * percent_plan/$('#subordinate_label').val()) * 0.8


        //czesc2 wzoru
        //var part2 = ($('#realisation').val() - $('#realisation').attr('min'))*ratio_part2
        var part2 = ($('#realisation').val() - ($('#plan').val()*percent_plan))*ratio_part2


        //wylicza całkowitą premie
        //var bonus = (((part1 + part2) + (part1 + part2) * (purpose1 + purpose2)) * income) * purpose3 				
        var bonus_purpose3 = ((part1 + part2) * income) * purpose3;
        var bonus_purpose1 = ((part1 + part2) * income) * purpose1
        var bonus_purpose2 = ((part1 + part2) * income) * purpose2
        bonus = bonus_purpose3 + bonus_purpose1 + bonus_purpose2

        bonus = parseInt(bonus);
        if ($('#realisation').val() / $('#plan').val() < percent_plan) {
            $('#bonus').text('0')
        }
        else {
            if (bonus < max_bonus) {
                $('#bonus').text(bonus)
            }
            else {
                $('#bonus').text(max_bonus)
            }					
        }

    }	

    licz_premie(max_bonus, percent_plan, income, ratio_part2);

    $('input').on("input change",function() {
        licz_premie(max_bonus, percent_plan, income, ratio_part2)

    })

});		

//tooltips, select option 
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
$(document).ready(function(){
    $('select option').on('click', function() { $('#abc').focus(); });
});