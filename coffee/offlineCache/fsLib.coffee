define([
  'module'
  ], (module)->

    #mapping browser support api
    window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem
    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder



    class fsLib
      _pr =
        localStorageEnable : !!localStorage
        fileSize: 1024*1024
        fs: null
        fsRoot: do(->
          localStorage.fsRoot
        )
        fsDeferred: $.Deferred()

      constructor: ->
        me = @
        onInitFs = (fs)=>
          ###
          fs.root.getDirectory(_pr.dirName.images, {create: true}, (dirEntry)->
            console.log('dirEntry ready')
          )
          ###
          #save fs(fileSystem) object
          _pr.fs = fs
          if not _pr.fsRoot
            localStorage.fsRoot = fs.root.toURL()
          _pr.fsDeferred.resolve(fs)

        window.requestFileSystem(
          window.TEMPORARY,
          _pr.fileSize
          onInitFs,
          @errorHandler
        )


      errorHandler: (e)->
        msg = ""
        switch e.code
          when FileError.QUOTA_EXCEEDED_ERR
            msg = "QUOTA_EXCEEDED_ERR"
          when FileError.NOT_FOUND_ERR
            msg = "NOT_FOUND_ERR"
          when FileError.SECURITY_ERR
            msg = "SECURITY_ERR"
          when FileError.INVALID_MODIFICATION_ERR
            msg = "INVALID_MODIFICATION_ERR"
          when FileError.INVALID_STATE_ERR
            msg = "INVALID_STATE_ERR"
          else
            msg = "Unknown Error"
        console.log "Error: " + msg


      set: (key, value)->
        #value.replace('data:image/png;base64,','')
        _pr.fsDeferred.done((fs)=>
          localStorage[key] = true
          fs.root.getFile "#{key}",
            create: true
          , (fs) ->
            fs.createWriter ((writer) ->
              writer.onwrite = (e) ->
                console.log "Write completed ===>", fs.toURL()

              writer.onerror = (e) ->
                console.log "Write failed: " + e


              writer.write value
            ), @errorHandler

        )

      get: (key)->
        rootURL = _pr.fsRoot
        if rootURL and localStorage[key]?
          "#{rootURL}/#{key}"
        else
          null

      delete: (key)->
        console.log 'delete', key
        delete localStorage[key]
        #TODO: try to delete file

      deleteAll: ->
        console.log 'deleteAll'
        localStorage.clear()
        #TODO


    new fsLib
)