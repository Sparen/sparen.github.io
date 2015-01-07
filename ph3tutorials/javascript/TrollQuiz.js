function checkAnswerTROLL(quizForm, theAnswer){
  var s = "?";

  var i = 0;
  for(;i<quizForm.elements.length;i++){
    if(("cc" == quizForm.elements[i].name) && (quizForm.elements[i].checked)){
      s = quizForm.elements[i].value;
    }
  }

  if(s == "?"){
    alert("Please make a selection.");
    return false;
  }

  if(s == theAnswer){
    alert("'"+s+"' is correct!");
  }else{
    alert("Thread 0 Crashed:: Dispatch queue: com.apple.main-thread0 com.apple.WebCore 0x0000000108446f1e WTF::HashMap<unsigned long, WTF::RefPtr<WebCore::ResourceLoader>, WTF::IntHash<unsigned long>, WTF::HashTraits<unsigned long>, WTF::HashTraits<WTF::RefPtr<WebCore::ResourceLoader> > >::remove(unsigned long const&) + 14\n1 com.apple.WebCore 0x00000001081f5df1 WebCore::DocumentLoader::removePlugInStreamLoader(WebCore::ResourceLoader*) + 33\n2 com.apple.WebCore 0x00000001089fe03c WebCore::NetscapePlugInStreamLoader::didFail(WebCore::ResourceError const&) + 28\n3 com.apple.WebKit 0x000000010728ad32 WebKit::WebResourceLoadScheduler::internallyFailedLoadTimerFired() + 262\n4 com.apple.JavaScriptCore 0x0000000107e06603 WTF::RunLoop::TimerBase::timerFired(__CFRunLoopTimer*, void*) + 35\n\n\n\n\n...Just Joking");
  }

  // return "false" to indicate not to
  // submit the form.
  // change this to "true" if the form
  // "action" is valid,
  // i.e. points to a valid CGI script
  //
  return false;
}