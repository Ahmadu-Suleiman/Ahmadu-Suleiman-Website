import 'package:ahmad_suleiman/others/student.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class CscDetailsUpload extends StatelessWidget {
  CscDetailsUpload({super.key});

  final TextEditingController fullNameController =
      TextEditingController(text: 'Umar Shehu');
  final TextEditingController lastnameController =
      TextEditingController(text: 'hh');
  final TextEditingController nicknameController =
      TextEditingController(text: 'hh');
  final TextEditingController dobController = TextEditingController(text: 'hh');
  final TextEditingController originController =
      TextEditingController(text: 'hh');
  final TextEditingController hobbiesController =
      TextEditingController(text: 'hh');
  final TextEditingController workController =
      TextEditingController(text: 'hh');
  final TextEditingController relationshipController =
      TextEditingController(text: 'hh');
  final TextEditingController crushController =
      TextEditingController(text: 'hh');
  final TextEditingController igController = TextEditingController(text: 'hh');
  final TextEditingController stressLevelController =
      TextEditingController(text: 'hh');
  final TextEditingController bestMomentController =
      TextEditingController(text: 'hh');
  final TextEditingController courseController =
      TextEditingController(text: 'hh');
  final TextEditingController lecturerController =
      TextEditingController(text: 'hh');
  final TextEditingController whatElseController =
      TextEditingController(text: 'hh');
  final TextEditingController quoteController =
      TextEditingController(text: 'hh');

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            leading: Image.asset('assets/images/others/kasulogo.png'),
            title: Text('Computer Science Students Personality Flyer Creator',
                style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                    color: Theme.of(context).colorScheme.primary,
                    fontWeight: FontWeight.bold))),
        body: SingleChildScrollView(
            child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(children: [
                  Form(
                      key: formKey,
                      child: Column(children: <Widget>[
                        input('Full name', fullNameController),
                        input('Nickname', nicknameController),
                        input('Date Of Birth', dobController),
                        input('Hobbies', hobbiesController),
                        input('Business/Skills', workController),
                        input('Relationship status', relationshipController),
                        input('Class crush', crushController),
                        input('IG handle', igController),
                        input('Most stressful level', stressLevelController),
                        input('Best Moment on Campus', bestMomentController),
                        input('Favourite course', courseController),
                        input('Favourite lecturer', lecturerController),
                        input('If not CSC, What else?', whatElseController),
                        input('Favourite quote', quoteController)
                      ])),
                  const SizedBox(height: 20),
                  ElevatedButton(
                      onPressed: () {
                        if (formKey.currentState!.validate()) {
                          Student student = Student(
                              fullName: fullNameController.text,
                              nickname: nicknameController.text,
                              dob: dobController.text,
                              origin: originController.text,
                              hobbies: hobbiesController.text,
                              work: workController.text,
                              relationship: relationshipController.text,
                              crush: crushController.text,
                              ig: igController.text,
                              stressfulLevel: stressLevelController.text,
                              bestMoment: bestMomentController.text,
                              course: courseController.text,
                              lecturer: lecturerController.text,
                              whatElse: whatElseController.text,
                              quote: quoteController.text);

                          context.go("/csc-personality-page", extra: student);
                        }
                      },
                      child: const Text('Submit'))
                ]))));
  }

  Widget input(String label, final TextEditingController controller) =>
      TextFormField(
          controller: controller,
          decoration: InputDecoration(labelText: label),
          validator: (value) {
            if (value == null || value.isEmpty) return 'Write something';
            return null;
          });
}
